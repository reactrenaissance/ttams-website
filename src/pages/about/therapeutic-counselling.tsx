import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";

function TherapeuticCounselling() {
    return (
      <div style={{ backgroundColor: "#F3E8D8" }} >
        <Navbar />
        <div className=" tc-top-half " ></div>
        <div className=" tc-bottom-half ">
          <div className=" tc-bottom-left " >
            <p className=" p-styles " >Life has an uncanny way of presenting us with unforeseen challenges, steering us down paths we could never have anticipated. Some are filled with distractions—whether delightful or disconcerting—while others are fraught with trials, and often, a perplexing blend of both. These moments compel us to persevere in the face of resistance or, conversely, resist even as we persist.​</p>
            <p className=" p-styles " >In these moments, we may find ourselves compelled to rigidly act in ways that sternly uphold our principles, or in other cases, we may feel obligated or bound by a sense of duty that encourages us to maintain stability for others that causes us to sacrifice our own desires for the sake of others’ stability.</p>
            <p className=" p-styles " >These choices often come at the expense of our own aspirations, demanding a profound reservoir of resilience, which does not come without its toll, eventually. It can unearth deep inner conflicts, prompting us to scrutinise not only the intentions of those around us, whether they offer support or challenge, but also our own motives and self-worth.</p>
            <p className=" p-styles " >When doubts about our worth begin to surface, they have the power to undermine our confidence, pushing us to suppress intrusive thoughts and emotions. In doing so, we may encounter a profound sense of injustice that tests our most cherished values and principles, unsettling our inner harmony. Yet, the true test does not lie in the challenges themselves but in our perception of them and in the manner in which we choose to face them.</p>
            <p className=" p-styles " >At TTAMS, we are dedicated to empowering our clients by helping them recognise the innate strengths they so often extend to others, yet overlook within themselves. We approach this process with humility and patience, respecting each client’s autonomy and unique capacity for self-expression. In a safe and supportive environment, we guide individuals as they navigate the labyrinth of their unwanted thoughts and feelings, gently fostering exploration and understanding.</p>
            <p className=" p-styles " >Our aim is to illuminate and replenish core beliefs, promoting holistic growth and a sense of balance. We strive to help our clients cultivate a deeper understanding of themselves, equipping them to confront even the most disabling or contradictory thoughts with compassion and clarity.</p>
            <p className=" p-styles " >At TTAMS, we listen with care and respect, creating a space where your voice is heard, your experiences are valued, and your journey is honoured. Together, we embark on a path of discovery, enabling you to uncover your own insights and arrive at meaningful solutions that resonate with your true self.</p>
            <Image 
            src="/images/about-pages/therapeutic-counselling/tc-corner-vector.svg"
            alt=" little design thing "
            width={200}
            height={200}
            />
          </div>
          <div className=" tc-bottom-right " >
            <h1 className=" h1-styles " >THERAPEUTIC APPROACH</h1>
            <p className=" p-styles " >
            At TTAMS, our therapeutic approach integrates Rational Emotive Behavioural Therapy (REBT), Gestalt, and person-centred techniques. We understand the challenges individuals face during difficult times, as most often during these times, uncertainty as to where to begin the journey towards healing can be confusing.</p>
            <br/>
            <h2 className=" h2-styles " >Therefore at TTAMS:</h2>
            <ul className=" p-styles " >
              <li> • We listen respectfully to gain a clear understanding of our clients experiences and how they impact their daily life. Together, we reflect on these issues to make sense of their effects on your thoughts, emotions, and beliefs.</li>
              <br/>
              <li> • We assist our clients in exploring their concerns and identifying potential triggers that significantly affect their well-being.</li>
              <br/>
              <li> • We assist in uncovering any unhealthy beliefs underlying unwanted behaviours, attitudes, or actions that contribute to instability.</li>
              <br/>
              <li> • We provide self-reflective exercises for our clients to explore at home, helping them to recognise patterns that influence behaviours influenced by beliefs, gaining clarity for the future </li>
              <br/>
              <li> • We create a safe, confidential space for our clients to discuss, explore, and reflect on their circumstances that have led them to where you are today.</li>
              <br/>
              <li> • We respectfully facilitate the release of suppressed emotions and thoughts within this confidential and supportive setting.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default TherapeuticCounselling; 
  