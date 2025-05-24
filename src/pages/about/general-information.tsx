import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CollapsibleInfo from "@/components/collapsable-info";

function GeneralInformation() {
  return (
    <div className="bg-[#C2ADAD] text-black">
      <Navbar />

      {/* Desktop Banner Layout */}
      <div className="hidden md:flex items-center justify-center w-full max-w-[1800px] mx-auto h-[650px] px-4 md:px-8 relative bg-[#B6B0A0]">
        <img
          src="/images/about-pages/general-information/gi-hero-banner.png"
          alt="General Information Banner"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <section className="relative z-10 w-full flex items-center justify-center text-center">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-4 max-w-5xl w-full text-left md:ml-[-34px]">
            <div className="text-black">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Approach</h2>
            </div>
            <div className="text-sm md:text-base text-black leading-relaxed space-y-2">
              <p>
                The world is a richly diverse place, often marked by intricate and dynamic conflicts of interest, particularly within the realms of family and relationships.
              </p>
              <p>
                As we journey through life, shaped by our own experiences, our principles and morals are likely to evolve. We strive to refine our boundaries or open ourselves to healthier connections, guided by the hope of fostering greater understanding and ethical engagement.
              </p>
              <p>
                Change, however, is not always a conscious decision. It often unfolds as a subtle, developmental process, triggered by moments of profound realisation or the breaking point that signals the need for transformation. On the one hand, the relentless pace of societal change can compel us to prioritise external expectations at the expense of our inner peace.
              </p>
              <p>
                This can leave us feeling isolated, as we attempt to bear our burdens alone, hesitant to seek guidance from trusted friends, family, or professionals. Life’s pressures, whether rooted in societal expectations, familial discord, or personal struggles, touch everyone at some stage. It is in these moments of vulnerability that support becomes essential.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Banner Layout */}
      <div className="flex flex-col md:hidden w-full">
        <img
          src="/images/about-pages/general-information/gi-hero-banner.png"
          alt="General Information Banner"
          className="w-full h-auto object-contain"
        />

        <section className="bg-[#B6B0A0] px-4 py-6 space-y-4">
          <h2 className="text-2xl font-bold text-left">Our Approach</h2>
          <div className="text-sm text-black leading-relaxed space-y-2">
            <p>
              The world is a richly diverse place, often marked by intricate and dynamic conflicts of interest, particularly within the realms of family and relationships.
            </p>
            <p>
              As we journey through life, shaped by our own experiences, our principles and morals are likely to evolve. We strive to refine our boundaries or open ourselves to healthier connections, guided by the hope of fostering greater understanding and ethical engagement.
            </p>
            <p>
              Change, however, is not always a conscious decision. It often unfolds as a subtle, developmental process, triggered by moments of profound realisation or the breaking point that signals the need for transformation. On the one hand, the relentless pace of societal change can compel us to prioritise external expectations at the expense of our inner peace.
            </p>
            <p>
              This can leave us feeling isolated, as we attempt to bear our burdens alone, hesitant to seek guidance from trusted friends, family, or professionals. Life’s pressures, whether rooted in societal expectations, familial discord, or personal struggles, touch everyone at some stage. It is in these moments of vulnerability that support becomes essential.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:px-6 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5 text-sm md:text-base leading-relaxed">
            <p className="mb-5">
              At TTAMS, we are dedicated to offering a holistic well-being service, specialising in therapeutic counselling, family mediation, and community mediation. Our mission is to provide compassionate support to those navigating emotional, psychological, environmental, or financial challenges. Whether facing the aftermath of divorce, separation, or other unforeseen losses, we are here to help individuals find clarity and comfort amidst life’s uncertainties.
            </p>
            <p className="mb-5">
              While mediation and therapeutic counselling differ in their approaches, at TTAMS, we blend our therapeutic knowledge and skills seamlessly into our mediation work, particularly when engaging with clients within the family mediation process, whilst still upholding the impartiality and non-bias approach of the mediation process.
            </p>
            <p className="mb-5">
              This is especially crucial when acknowledging emotional difficulties and psychological challenges, ensuring a compassionate and holistic approach to support.
            </p>
            <p className="mb-5">
              Our clients' emotional and mental well-being is of paramount importance not only to our supportive services but also to society as a whole. We strive to help you maintain or improve your well-being and circumstances while remaining impartial, non-judgemental, and unbiased.
            </p>
            <img src="/images/about-pages/general-information/feather-vector.svg" alt="Feather Graphic" className="mt-4 max-w-[180px] md:max-w-xs" />
          </div>

          <div className="md:w-2/5 bg-gradient-to-b from-[#F3E8D8] to-[#E8D8C2] p-5 md:p-6 rounded-2xl shadow-md">
            <CollapsibleInfo
              sections={[
                {
                  title: "Disclosure of Information Retainment & Privacy",
                  fullText: "We uphold clients confidentiality, including the disclosure of personal documents respectfully, whilst assuming your safety and privacy."
                },
                {
                  title: "Respectful & Attentive Listening",
                  summary: "We approach each client’s situation with deep attentive listening...",
                  fullText: "We approach each client’s situation with deep attentive listening, empathy, genuine regard, authenticity, and respect for their thoughts, feelings, and beliefs.\nOur focus lies in thoughtfully identifying areas where challenges may not have been afforded the necessary urgency or where undue emphasis may have been placed on less pressing concerns."
                },
                {
                  title: "Effective Time Management and Competitive Prices:",
                  summary: "By steadfastly adhering to the principles of mediation, we have established a service that embodies these values by offering our clients...",
                  fullText: "By steadfastly adhering to the principles of mediation, we have established a service that embodies these values by offering our clients the flexibility to select their preferred time and date through the convenience of our online calendar.\nAdditionally, we have thoughtfully integrated an online booking system that includes the option of instalment payments. This approach ensures not only efficiency and fair pricing but also accommodates a schedule that aligns with your unique circumstances and needs."
                },
                {
                  title: "Non-Judgemental Approach",
                  summary: "We engage with our clients thoughtfully and impartially, free from bias, opinion, or judgement...",
                  fullText: "We engage with our clients thoughtfully and impartially, free from bias, opinion, or judgement.\n Our approach is rooted in respect, positive regard with a genuine desire to empower individuals to make their own decisions and take meaningful action. Through fostering self-reflection, we aim to nurture their confidence and sense of agency, always honouring their unique journey."
                },
                {
                  title: "Empowerment",
                  summary: "We take pride in supporting our clients as they cultivate confidence...",
                  fullText: "We take pride in supporting our clients as they cultivate confidence in their chosen areas of interest.\nWith a thoughtful and empathetic approach, we guide our client towards gaining a deeper appreciation of diverse perspectives, offering clarity and understanding where it is most needed."
                },
                {
                  title: "Diverse Support",
                  summary: "We endeavour to support individuals navigating a diverse array of challenges...",
                  fullText: "We endeavour to support individuals navigating a diverse array of challenges and circumstances, whether they stem from interpersonal conflicts or deeply personal, internal struggles.\nOur approach is rooted in compassion and understanding, recognising the unique journey each person faces."
                }
              ]}
            />
          </div>
        </div>

        <div className="mt-14" style={{ backgroundColor: "#C5A891" }}>
          <h2 className="text-lg md:text-xl font-semibold mb-3">Regulated Service</h2>
          <p className="mb-3">
            Our service is committed to adhering to the rigorous standards established by the BACP, FMC, FMA, and the Data Protection Act 1998. Confidentiality is paramount, and no information arising from the mediation process will be disclosed without explicit prior consent.
          </p>
          <p className="mb-3">
            At TTAMS, our policies and procedures are thoughtfully designed to reflect these guiding principles, ensuring that all interactions are grounded in professionalism, respect, and care. We strive to provide a supportive environment in which clients and participants can explore their unique circumstances and challenges with confidence and dignity.
          </p>
          <p className="mb-3">
            Our aim is to empower individuals to navigate their experiences with resilience and adaptability, fostering personal growth and an improved mental state. By embracing these principles, we help our clients progress towards greater inner peace, enabling them to overcome difficulties while preserving their integrity and sense of self.
          </p>
          <p>
            TTAMS remains steadfast in its commitment to uphold the ethical standards of the governing bodies that inspire our work, ensuring that every step forward is taken with compassion and purpose.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GeneralInformation;
