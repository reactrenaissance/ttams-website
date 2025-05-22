import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-[#BDB097] text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url('/images/home/home-hero.png')",
          }}
        />
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Logo - nudged up */}
          <div className="relative w-72 md:w-80 aspect-[1/1] mt-[-1rem]">
            <Image
              src="/images/home/home-logo.png"
              alt="TTAMS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Slogan - pulled closer to logo */}
          <div className="mt-[-1.5rem]">
            <h1 className="text-lg md:text-xl font-semibold tracking-wide text-white drop-shadow-sm">
              TAYLOR'D THERAPY & MEDIATION SERVICE
            </h1>
            <p className="text-sm md:text-base text-white/80 drop-shadow-sm">
              TOGETHER TACKLING ADVERSITIES MEANINGFULLY
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative w-full text-center overflow-hidden py-24">
        <div className="relative z-10 flex justify-center">
          <div className="max-w-xl w-full bg-gradient-to-b from-[#f6eecb] to-[#bfb08e] rounded-[100px] px-8 py-10 shadow-lg border border-[#d5c8a3]">
            <h2 className="text-xl font-bold mb-4">Welcome All</h2>
            <p className="text-base leading-relaxed text-black">
              Welcome to Taylor’d Therapy and Mediation Service where we assist those facing adversities.
              Whether it’s family issues involving parental arrangements, financial, social, or personal issues,
              we’re here to help you re-stabilise a healthy way forward through our professional support.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
