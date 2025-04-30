import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null); // Clear errors when switching
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/auth/profile/account-settings"); // Go to settings after login
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;
    const confirmPassword = (e.currentTarget.elements.namedItem("confirmPassword") as HTMLInputElement).value;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/auth/profile/account-settings"); // Go to settings after signup
    }

    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  };

  return (
    <div style={{ backgroundColor: "#F3E8D8" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h1>

          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

          {isLogin ? (
            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
              <input name="email" type="email" placeholder="Email" className="p-2 border rounded" required />
              <input name="password" type="password" placeholder="Password" className="p-2 border rounded" required />
              <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="flex flex-col space-y-4">
              <input name="name" type="text" placeholder="Name" className="p-2 border rounded" required />
              <input name="email" type="email" placeholder="Email" className="p-2 border rounded" required />
              <input name="password" type="password" placeholder="Password" className="p-2 border rounded" required />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" className="p-2 border rounded" required />
              <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                Sign Up
              </button>
            </form>
          )}

          <div className="text-center mt-4">
            <button onClick={toggleForm} className="text-blue-500 hover:underline">
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
