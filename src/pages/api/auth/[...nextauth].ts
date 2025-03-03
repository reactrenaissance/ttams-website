import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import EmailProvider from "next-auth/providers/email";

console.log("GITHUB_ID:", process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET);


export const authOptions = {
    providers: [
        // Google Authentication
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    
        // Apple Authentication
        AppleProvider({
          clientId: process.env.APPLE_CLIENT_ID!,
          clientSecret: process.env.APPLE_CLIENT_SECRET!,
        }),
    
        // Email Authentication
        EmailProvider({
          server: process.env.EMAIL_SERVER!,
          from: process.env.EMAIL_FROM!,
        }),
      ],
    
      session: {
        strategy: "jwt" as const, // Use JWT for session handling
      },
    
      pages: {
        signIn: "/auth/signin", // Custom sign-in page
      },
    };

export default NextAuth(authOptions)