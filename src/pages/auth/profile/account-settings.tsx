import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabaseClient";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AccountSettings() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    healthConditions: "",
    currentPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(true);
  const [deletionDate, setDeletionDate] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!session || error) {
        router.push("/auth/authpage");
        return;
      }

      const user = session.user;
      setFormData({
        name: user.user_metadata?.name || "",
        email: user.email || "",
        phone: user.user_metadata?.phone || "",
        dateOfBirth: "",
        healthConditions: "",
        currentPassword: "",
        newPassword: "",
      });

      const { data: userDetails } = await supabase
        .from("users")
        .select("deletion_scheduled_at")
        .eq("id", user.id)
        .single();

      if (userDetails?.deletion_scheduled_at) {
        setDeletionDate(userDetails.deletion_scheduled_at);
      }

      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error: updateError } = await supabase.auth.updateUser({
      email: formData.email,
      data: {
        name: formData.name,
        phone: formData.phone,
      },
    });

    if (updateError) {
      alert("Error updating user: " + updateError.message);
      return;
    }

    if (formData.newPassword.trim() !== "") {
      const { error: passwordError } = await supabase.auth.updateUser({
        password: formData.newPassword,
      });
      if (passwordError) {
        alert("Error updating password: " + passwordError.message);
        return;
      }
    }

    alert("Account settings updated successfully!");
  };

  const handleCancelDeletion = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;
    await supabase
      .from("users")
      .update({ deletion_scheduled_at: null })
      .eq("id", user.id);

    setDeletionDate(null);
    alert("Account deletion cancelled.");
  };

  const handleDeleteAccount = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;
    const deletionDate = new Date();
    deletionDate.setDate(deletionDate.getDate() + 14);

    await supabase
      .from("users")
      .update({ deletion_scheduled_at: deletionDate.toISOString() })
      .eq("id", user.id);

    alert("Your account is scheduled for deletion in 14 days. Log in to cancel.");
    router.push("/");
  };

  return (
    <div style={{ backgroundColor: "#F3E8D8" }}>
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Account Settings</h1>

            {deletionDate && (
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-4">
                Your account is scheduled to be deleted on <strong>{new Date(deletionDate).toLocaleDateString()}</strong>.<br />
                <button onClick={handleCancelDeletion} className="text-blue-500 underline mt-2 block">
                  Cancel deletion
                </button>
              </div>
            )}

            <form onSubmit={handleSave} className="flex flex-col space-y-4">
              <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" />
              <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-2 border rounded" />
              <input name="dateOfBirth" placeholder="DOB" value={formData.dateOfBirth} onChange={handleChange} className="p-2 border rounded" />
              <textarea name="healthConditions" placeholder="Health Conditions" value={formData.healthConditions} onChange={handleChange} className="p-2 border rounded" />
              <input type="password" name="newPassword" placeholder="New Password" value={formData.newPassword} onChange={handleChange} className="p-2 border rounded" />
              <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save Changes</button>
            </form>

            <div className="mt-6">
              <h2 className="text-xl text-red-600 font-bold mb-2">Danger Zone</h2>
              <button onClick={handleDeleteAccount} className="p-2 w-full bg-red-500 text-white rounded">Delete Account</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
