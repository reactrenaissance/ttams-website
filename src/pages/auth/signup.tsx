import { useState } from "react";
import { supabase } from "@/utils/supabaseClient"; // 🛠 IMPORT this!
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router"; // 🛠 To redirect after signup

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with:", formData);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          phone: formData.phone,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setError(null);
      router.push("/account-settings"); // ✅ Redirect to account settings
    }
  };

  return (
    <div style={{ backgroundColor:"#F3E8D8"}} >
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

          {error && <div className="text-red-500 text-center mb-2">{error}</div>}
          {success && <div className="text-green-500 text-center mb-2">Signed up successfully!</div>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="/auth/authpage" className="text-blue-500 hover:underline">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
