import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

function AboutTTAMS() {
    return (
      <div style={{ backgroundColor: '#053157' }} >
        <div className="navbar-gradient-bg">
          <Navbar />
          </div>
          <div className="about-hero">
          <img
            src="/images/about-pages/about-ttams/at-banner.svg"
            alt="banns"
            fetchPriority="high"
            style={{ display: 'none' }}
          />

            <div className="about-hero-bg" />
            
            <div className="about-hero-overlay">
              <Image 
                src="/images/about-pages/about-ttams/generic-ttams-logo.svg"
                alt="TTAMS logo"
                height={300}
                width={300}
              />
              <h1>
                THE CREATION <br /> OF TTAMS...
              </h1>
            </div>
          </div>
      <div className=" about-bottom-half ">
        <div className=" about-bottom-left " >
            <h1 className="h1-styles">
            THE JOURNEY TO DEVELOPMENT OF TTAMS
             </h1>

            <div className="p-styles">
              <p>
                My journey began in September 2011 as a student studying counselling skills. In 2016, I qualified as a therapeutic counsellor, a role I continue to pursue with passion and dedication.
              </p>
              <p>
                Witnessing my clients’ development of self-esteem and self-worth brings me a sense of fulfilment, as I have the privilege of observing the intricate details of their growth, whilst equally having appreciation for the fact that I was part of their journey to better days.
              </p>
              <p>
                I am humbled by their trust in my support and approach as they begin to recognise their own capacity and resilience through the work that we do together. The experiences of my clients have been a profound source of inspiration, motivating me to continually grow and refine my practice to provide the highest level of care and support for my future clients.
              </p>
              <p>
                While my work with clients has profoundly influenced my desire to create a service that supports our society and communities, another significant source of inspiration for the vision of TTAMS arose from my own journey through adversity. Life has a way of testing us, often in ways we least anticipate. I, too, have faced profound challenges that left me utterly devastated to my very core.
              </p>
              <p>
                In time, I came to realise that the only way to nurture a more hopeful outlook, and ultimately create better outcomes, was to confront the struggles within my life head-on. By doing so, I began to unearth the hidden strengths buried beneath my pain and, step by step, planted the seeds of something greater; a quiet yet unwavering determination to transform suffering into purpose.
              </p>
              <p>
                Restoring a sense of stability was a long and arduous journey. It was only through my own process of healing that I came to realise how often we, whether consciously or unconsciously, attempt to push aside our experiences, neglecting to truly confront, unearth, and understand the impact of our adversities in a sincere, holistic manner.
              </p>
              <p>
                These very experiences became the foundation and cornerstone of my unwavering commitment to creating a sanctuary where others might find the courage to uncover their inner strength, rekindle a sense of constructive inner belief, and embark on a healing journey they may have once deemed unattainable.
              </p>
              <p>
                At TTAMS, we understand that, at times, our behaviour may seem out of character, as our circumstances can profoundly influence our mindset and beliefs. We are here to support you in developing holistic approaches to navigating these challenges, nurturing a greater sense of well-being.
              </p>
              <p>
                We believe that your journey towards sustainability should not conclude when mediation or therapeutic sessions come to an end. For when one door closes, another should gracefully open, allowing for ongoing growth, self-reflection, and development.
              </p>
            </div>
        </div>
        <div className=" about-bottom-right " 
        style={{
          borderRadius: '30px',
          margin: '10vh 10vw',
        }}
        >
          <img 
          src="/images/about-pages/about-ttams/placeholder-t.png"
          />
          <h1 className=" h1-styles ">
            HISTORY AND <br/> EXPERIENCE
          </h1>
          <p className=" p-styles " >Through my personal experiences and training, I have developed a understanding of how many of us respond to adversity.
            <br/>
            With over 16 years of experience in the public sector, my career has taken me through a range of roles, such as working in several residential services for both young people and adults facing diverse challenges, to providing support for young people in care, overseeing family contact supervision for parents undergoing guardianship assessments, engaging in play and youth work, and offering respite for individuals who require specific assistance with their daily needs and care.
            <br/>
            These varied experiences have enriched me with a deep awareness and a versatile skill set, which I now bring in supporting those who seek my help.This ensures that our clients feel heard understood, as we support them throughout their journey whilst with us, whilst remaining unbiased and confidential across the board.​
            <br/>
            With the expert guidance and support of a professional at TTAMS, we can assist you in fostering self-appreciation and resilience, ensuring that you are never alone in confronting life's trials. In doing so, we aim to equip you with the tools to handle your difficulties with independence and autonomy, empowering you to navigate life’s complexities with confidence.
          </p>
        </div>
        </div>
        <Footer />
      </div>
    )
}

export default AboutTTAMS;