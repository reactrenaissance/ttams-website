import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";

function CounsellingFocuses() {

  const wellbeingCards = [
    {
      id: 1,
      title: "EROSION OF SELF ESTEEM AND CONFIDENCE",
      text: "In an effort to preserve inner peace, we might shy away from potentially triggering experiences...",
    },
    {
      id: 2,
      title: "LOSS OF POSSESSION",
      text: "The loss of material items... can feel destabilising and deeply affect one’s sense of security.",
    },
    {
      id: 3,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 4,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 5,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 6,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 7,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 8,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 9,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 10,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 11,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 12,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 13,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
    {
      id: 14,
      title: "BEREAVEMENT",
      text: "Grieving the loss of someone or something dear can be deeply unsettling...",
    },
  ];

    return (
      <div style={{ backgroundColor: '#CFC4B2' }} >
        <Navbar />
        <h1 style={{
          color: 'black',
          fontSize: "50px",
          margin: "20px 0px 40px 60px"
        }} >
          Wellbeing Focuses
          </h1>
        <div className=" h-[500px] w-full relative ">
          <Image
            alt="banner"
            src="/images/about-pages/wellbeing-focuses/wellbeing-focuses-banner.svg"
            width={1920}
            height={400}
            className="object-cover w-full h-full"
          />
      </div>
        <div className="wellbeing-mid-part">
          <div className="wellbeing-mid-left">
            <h1 className=" h1-styles " >TTAMS Wellbeing Interests</h1>
            <p className=" p-styles " >At TTAMS, we understand that unresolved, challenging experiences can subtly erode confidence, strain relationships, impact professional life, and undermine overall well-being, leaving us feeling stuck or even deeply distressed. With the right support, it is possible to manage our well-being more effectively, whether by embracing the right to experience peace or by nurturing a deeper understanding of our own self-worth.</p>
            <p className=" p-styles " >We honour the individuality of each client and hold their autonomy in the highest regard. At TTAMS, integrity remains at the heart of all we do.Our mission is to assist clients in developing a strong moral compass and maintaining their well-being in alignment with their renewed sense of purpose.</p>
            <p className=" p-styles " >We approach this with an open mind, striving to empower individuals by fostering awareness of their inherent equality within society and their fundamental human rights, grounded in the hierarchy of needs.This journey involves cultivating an understanding of mindfulness; a practice that helps clients gain healthier insights into themselves and their experiences.</p>
            <p className=" p-styles " >Through this process, TTAMS seeks to guide individuals in navigating difficult emotional states with compassion, offering steadfast support at every step. At TTAMS, we are committed to being a source of strength and encouragement, helping our clients find clarity, balance, and resilience in the face of life’s challenges.</p>
            <p className=" p-styles " >Our therapeutic approach draws upon theories such as person-centred therapy, Gest, and cognitive-behavioural techniques which makes our interventions tactics uniquely designed to meet our clients needs.​</p>
            <p className=" p-styles " >By providing a safe and supportive environment, we empower our clients to explore their emotions, strengthen, weaknesses and resilience, so that they can work towards a better understanding of themselves for holistic well-being, as it is vital for our clients to establish a sense of acknowledgment and understanding for the therapeutic process to be effective.</p>
            <p className=" p-styles " >At TTAMS, the foundation of our work together is built upon mutual trust and openness and patience, which are essential for making meaningful progress on our journey of healing and growth. Through empathetic listening and compassionate support, we create a supportive environment where clients feel validated and empowered to explore their emotions and challenges.</p>
            <p className=" p-styles " >Drawing from therapeutic counselling theories like person-centred therapy, we emphasise the importance of genuine empathy and positive regard to foster a therapeutic alliance that promotes resilience and personal development under our clients own autonomy.</p>
            <p className=" p-styles " >Depression is a multifaceted condition, but by understanding its roots and recognising its manifestations, there is hope for meaningful support, connection, and healing. 
              Significant setbacks can leave us feeling defeated and worthless.
              Coping with overwhelming emotions can impact our ability to manage daily life. Our self-esteem and sense of purpose can plummet, casting a shadow over our existence.</p>
          </div>
          <div className="wellbeing-mid-right">
          <div className="wb-overlapping-image" >
            <Image
            alt="overlapping"
            src="/images/about-pages/wellbeing-focuses/sit-down-therapy.svg"
            width={650}
            height={650}
            className="mx-auto md:mx-0"
            />
            </div>
            <h1 className=" h1-styles " >COUNSELLING WELLBEING FOCUS</h1>
            <p className=" p-styles " >At TTAMS, we specialise in supporting clients through a diverse range of challenges, including:</p>
            <h3 className=" h3-styles ">ANXIETY & DEPRESSION</h3>
            <p className=" p-styles " >Anxiety and depression often intertwine, amplifying their effects and deepening emotional distress. </p>
            <p className=" p-styles " >Significant setbacks, be it a personal loss, failure, or perceived inadequacy, can leave us feeling defeated and powerless. This emotional weight, if left unchecked, can develop into depression, characterised by feelings of hopelessness and worthlessness. As depression takes hold, the mind begins to anticipate the worst in every situation, heightening fears of failure, rejection, or loss.</p>
            <p className=" p-styles " >This negative anticipation activates anxiety, manifesting as persistent worry, an inability to focus, and physical symptoms like restlessness or a racing heart. The heightened state of alertness often reinforces depressive thoughts, as the exhaustion from constant anxiety leaves little room for hope or positive reflection.</p>
            <p className=" p-styles " >Coping with overwhelming emotions can impact our ability to manage daily life. Our self-esteem and sense of purpose can plummet, casting a shadow over our existence.
              However, by recognising these struggles and seeking compassionate support, we can begin to address their roots and move towards healing.</p>
            <p className=" p-styles " >At TTAMS, we help clients identify and challenge the irrational beliefs that perpetuate feelings of stagnation and helplessness, encouraging the adoption of healthier, more empowering thought patterns. Our approach focuses on reframing unhelpful thinking that magnifies fear and self-doubt, which often fuels anxiety.</p>
            <p className=" p-styles " >By equipping clients with internal strategies to confront and process the emotions behind their anxieties, we enable them to take steps towards greater self-understanding and emotional resilience.We provide a safe, supportive environment where clients can explore their vulnerabilities without judgment.</p>
            <p className=" p-styles " >By offering empathy and a non-judgmental approach, we help clients reconnect with their self-worth and nurture their capacity for personal growth and healing. Additionally, we guide clients in reflecting on their sense of purpose and personal values, empowering them to uncover meaning even amidst adversity.</p>
            <p className=" p-styles " >You may be eligible for a discount or to pay with instalment plan. To view the tariffs, scroll below </p>
          </div>
        </div>
        <div className="wb-bottom-part grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">
          {wellbeingCards.map(({ id, title, text }) => (
            <div key={id} className="flex bg-[#A47C50] p-4 rounded-md shadow-md items-start">
              <div className="min-w-[100px] max-w-[100px] mr-4">
                <Image
                  src={`/images/about-pages/wellbeing-focuses/${id}.svg`}
                  alt={title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-sm mb-1 uppercase">{title}</h3>
                <p className="text-sm leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
  
  export default CounsellingFocuses;
  