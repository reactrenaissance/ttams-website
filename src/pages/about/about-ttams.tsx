import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css"; // make sure this contains the custom CSS below

export default function AboutTTAMS() {
  return (
    <div className="bg-[#0F2B4C] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
          style={{ backgroundImage: "url('/images/about-pages/about-ttams/about-banner.png')" }}
        />

        {/* Optional Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in">
          <div className="w-44 md:w-56 relative aspect-[1/1] mb-4">
            <Image
              src="/images/about-pages/about-ttams/generic-ttams-logo.svg"
              alt="TTAMS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm md:text-base text-white/80 drop-shadow-sm">THE CREATION OF TTAMS...</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">THE JOURNEY TO DEVELOPMENT OF TTAMS</h2>
          <p>My journey began in September 2011 as a student studying counselling skills. In 2016, I qualified as a therapeutic counsellor, a role I continue to pursue with passion and dedication.</p>
          <p>Witnessing my clients’ development of self-esteem and self-worth brings me a sense of fulfilment, as I have the privilege of observing the intricate details of their growth, whilst equally having appreciation for the fact that I was part of their journey to better days.</p>
          <p>I am humbled by their trust in my support and approach as they begin to recognise their own capacity and resilience through the work that we do together.</p>
          <p>The experiences of my clients have been a profound source of inspiration, motivating me to continually grow and refine my practice to provide the highest level of care and support for my future clients.</p>
          <p>While my work with clients has profoundly influenced my desire to create a service that supports our society and communities, another significant source of inspiration for the vision of TTAMS arose from my own journey through adversity.</p>
          <p>Life has a way of testing us, often in ways we least anticipate. I, too, have faced profound challenges that left me utterly devastated to my very core.</p>
          <p>One of the most impactful decisions I made, to ultimately create better outcomes, was to confront the struggles within my life head-on. By doing so, I began to unearth the hidden strengths buried beneath my pain and, step by step, planted the seeds of something greater; a quiet yet unwavering determination to transform suffering into purpose.</p>
          <p>Restoring a sense of stability was a long and arduous journey. It was only through my own process of healing that I came to realise how often we, whether consciously or unconsciously, attempt to push aside our experiences, neglecting to truly confront, unearth, and understand the impact of our adversities in a sincere, holistic manner.</p>
          <p>These very experiences became the foundation and cornerstone of my unwavering commitment to creating a sanctuary where others might find the courage to uncover their inner strength, rekindle a sense of constructive inner belief, and embark on a healing journey they may have once deemed unattainable.</p>
          <p>At TTAMS, we understand that, at times, our behaviour may seem out of character, as our circumstances can profoundly influence our mindset and beliefs.</p>
          <p>We are here to support you in developing holistic approaches to navigating these challenges, nurturing a greater sense of well-being.</p>
          <p>We believe that your journey towards sustainability should not conclude when mediation or therapeutic sessions come to an end. For when one door closes, another should gracefully open, allowing for ongoing growth, self-reflection, and development.</p>
        </div>

        <div className="bg-[#B6C9F0] text-black rounded-2xl p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">HISTORY AND EXPERIENCE</h3>
          <p>Through my personal experiences and training, I have developed an understanding of how many of us respond to adversity.</p>
          <p>My journey in social care includes a wide range of roles, such as working in several residential services for both young people and adults facing diverse challenges, to providing support for young people in care, overseeing family contact supervision for parents undergoing guardianship assessments, engaging in play and youth work, and offering respite for individuals who require specific assistance with their daily needs and care.</p>
          <p>These varied experiences have enriched me with a deep awareness and a versatile skill set, which I now bring in supporting those who seek my help.</p>
          <p>This ensures that our clients feel heard and understood, as we support them throughout their journey whilst with us, whilst remaining unbiased and confidential across the board.</p>
          <p>With the expert guidance and support of a professional at TTAMS, we can assist you in fostering self-appreciation and resilience, ensuring that you are never alone in confronting life’s trials.</p>
          <p>In doing so, we aim to equip you with the tools to handle your difficulties with independence and autonomy, empowering you to navigate life’s complexities with confidence.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
