import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
      <p className="mt-4">
        Don't have an account? <Link href="/auth/signup" className="text-blue-600">Sign Up</Link>
      </p>
    </div>
  );
}
