import Image from "next/image";
import { sanityClient } from "@/sanity/sanity.client"; 
import Link from "next/link";
import "@/styles/globals.css";


export async function getStaticProps() {
  const articles = await sanityClient.fetch(`*[_type == "article"]`);
  return { props: { articles } };
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/homepage-background.png')" }}>
        {/* Navigation Bar */}
        <nav className="">
          {/* Menu Items */}
          <div className="flex flex-wrap gap-6">
          <Link href="/">Home</Link>
          <Link href="">About</Link>
          <Link href="">Therapies</Link>
          <Link href="">Contact Us</Link>
          <Link href="">Privacy Policy</Link>
          </div>

          {/* Auth Buttons */}
          <div>
            <Link href="auth/signin"><button className="px-4 py-2 bg-custom-red text-white rounded-lg" >Log in</button></Link>
            <Link href=""><button className="px-4 py-2 text-white rounded-lg">Sign up</button></Link>
          </div>
        </nav>

        {/* Main Content */}
        <div>
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={150} height={150} />

          {/* Slogan */}
          <h1 className="">TAYLOR'D THERAPY & MEDIATION SERVICE</h1>
          <h2>TOGETHER TACKLING ADVERSITIES MEANINGFULLY</h2>

          {/* Welcome Message in a Circle */}
          <div>
            <p>
            Welcome to Taylor'd Therapy and Mediation Service where we assist those facing adversities. 
            Whether it’s family issues involving parental arrangements, financial, social, or personal issues, we’re here to help you re-stabilise a healthy way forward, in the best way possible through our professional support.
            We understand that life’s hurdles can be challenging. It’s not just about what we encounter, but how we internalise and adapt to our circumstances that makes all the difference. 
            We’re here to help you reshape your perspective and discover healthier ways to cope. Together, we can turn challenges into opportunities for growth. Welcome to a journey of supportive development and transformation.
            </p>
          </div>
        </div>
    </div>
  );
}
