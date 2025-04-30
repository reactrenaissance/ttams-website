import React from "react";
import Image from "next/image";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import Link from "next/link";


function FamilyMediation() {

  const Card = ({ id, title, content, more, image }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-title">{title}</div>
        <div className="card-content">
          <p>
            {isExpanded ? (
              <>
                {content.replace(/\.\.\.$/, "")}
                {more}
              </>
            ) : (
              <>
                {content}
              </>
            )}
          </p>
          <span onClick={toggleExpanded} className="read-more">
            {isExpanded ? "Read less" : "Read more"}
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <div style={{ backgroundColor: "#F3E8D8" }}>
        <Navbar />
        <div style={{
            backgroundColor: "#ECE8DC"
          }} >
        <div className=" fm-top-half " >
          <div className=" fm-title " >
            <h1 className=" h1-styles " > Family <br/>Mediation </h1>
          </div>
          <div className=" fm-mid-left " >
              <p className=" p-styles " >
                Even in relationships where minor conflicts once seemed manageable, unresolved disagreements can escalate over time, creating unintended and deeply ingrained tensions.
              </p>
              <p className=" p-styles " >
              These challenges may arise from a variety of factors, including misaligned priorities, differing values, or unmet emotional needs. The resulting disputes can fuel misunderstandings, making it increasingly difficult for couples to communicate effectively or find common ground. Left unchecked, such dynamics can lead to an environment of persistent frustration and emotional exhaustion, further deepening the divide between partners.
              </p>
              <p className=" p-styles ">
              At TTAMS, we recognise the emotional complexity and unique challenges that arise from separation and divorce. We are committed to supporting individuals and couples with empathy, understanding, and practical strategies for managing conflict.                  </p>
                <p className=" p-styles ">
                 Our mediation services focus on helping participants address their concerns and disagreements in a constructive and respectful manner. By creating a safe and neutral space, we facilitate open communication that encourages each party to express their feelings, needs, and perspectives without fear of judgement. This process helps to:​​​
                </p>
                <ul className="p-styles">
                  <li> • Resolve conflicts to a level of mutual respect and understanding.</li><br/>
                  <li> • Establish clear boundaries that promote healthier interactions moving forward.</li><br/>
                  <li> • Foster an environment where emotional wounds can begin to heal.</li><br/>
                  <li> • Enhancing Communication for Lasting Understanding</li><br/>
                  <li> • Effective communication is at the heart of conflict resolution.</li><br/>
                </ul>
                <p className=" p-styles " >
                At TTAMS, we work with couples to develop practical tools and techniques that enhance their ability to listen, empathise, and respond thoughtfully to each other. This improved communication can pave the way for a deeper understanding of each other's experiences, helping both parties to appreciate differing perspectives and make decisions with greater consideration.
                </p>
                <p className=" p-styles " >
                  By addressing the root causes of conflict and prioritising mutual respect, we aim to empower individuals to move forward with a renewed sense of clarity and confidence. Our approach not only helps resolve immediate disputes but also lays the groundwork for healthier relationships in the future, whether co-parenting arrangements, friendship, or simply peaceful coexistence.
                </p>
                <p className=" p-styles " >
                With the right support, separation can also mark the beginning of personal growth and a new chapter. At TTAMS, we are here to guide participants through this journey with grace, compassion, and practical solutions tailored to their unique circumstances.
                </p>
                <h2 className=" h2-styles ">
                PRIORITISING WELL-BEING
                </h2>
                <p className=" p-styles ">
                ​We recognise that unresolved conflicts can leave emotional scars that persist long after legal or logistical matters are settled. That’s why our mediation services also focus on fostering emotional closure. By addressing underlying tensions and promoting healthy communication, we help families achieve a sense of resolution that extends beyond the immediate issues at hand.​
                </p>
                <div 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '30px',
                }}
                 >
                  <Image 
                  src="/images/therapies-pages/family-mediation/fm-design-corner.svg"
                  alt="little design piece"
                  width={350}
                  height={350}
                  />
                </div>
            </div>
        </div>
          <div className=" fm-mid-part " >
            <div className=" fm-mid-right " >
              <h1 className=" h1-styles " >OUR COMMITMENT AIMS</h1>
              <p className=" p-styles " 
              style={{
                fontWeight: 'bold'
              }}
              >
              At TTAMS, our aim is to assist families in navigating and resolving challenging times with compassion and clarity.
              </p>
              <p className=" p-styles " >
              At TTAMS, we are dedicated to helping families navigate the complex and often emotionally challenging terrain of separation, divorce, and conflict resolution.
              </p>
              <p className=" p-styles " >
              With compassion, clarity, and a focus on well-being, we strive to provide a supportive environment where families can address disputes constructively and move forward towards a more harmonious future. <br/><br/>
              </p>
              <h2 className=" h2-styles ">
              A FLEXIBLE APPROACH TO FINANCIAL DISPUTES
              </h2>
              <p className=" p-styles " >
              Accessibility Understanding that financial constraints can sometimes add additional stress during periods of family upheaval, we offer flexible deposit and instalment payment arrangements over 3–6 months. This ensures that our services remain accessible to families, allowing them to prioritise resolving their disputes without being overwhelmed by immediate financial concerns. <br/><br/>
              </p>
              <h2 className=" h2-styles ">
              HOW TTAMS SUPPORTS FAMILIES <br/>
              </h2>
              <p className=" p-styles " >
              At TTAMS, we provide a safe and impartial space where families and couples can work respectfully and amicably to reach settlements on a range of issues, including:​
              </p>
              <p className=" p-styles " >
                <li>
                  <ul> Financial matters, such as dividing assets and establishing support arrangements.</ul>
                  <ul> Resolving unsettled conflicts related to child custody, visitation, and other parenting responsibilities.</ul> <br/>
                </li>
              </p>
              <p className=" p-styles " >
              Our approach is rooted in fostering collaboration and understanding, helping clients address lingering concerns constructively. This is particularly critical when children are involved, as it enables parents to gain deeper insights into how their children perceive the separation. By prioritising the well-being of all family members, we aim to facilitate closure while supporting parents in developing co-parenting strategies that promote stability and security for their children.
              </p>
              <h2 className=" h2-styles ">
              THE ROLE OF MEDIATION IN CONFLICT
              </h2>
              <p className=" p-styles " >
              Resolution Mediation at TTAMS focuses on providing a structured and empathetic process for addressing conflicts. 
              </p>
              <p className=" p-styles " >
              Unlike adversarial court proceedings, our mediation services encourage open communication and mutual respect, allowing all parties to voice their concerns, hopes, and perspectives. Through guided discussions, we assist families in:
              </p>
              <p className=" p-styles " >
              ​Reaching fair and sustainable resolutions that reflect the needs of all involved.
              </p>
              <p className=" p-styles " >
                <li>
                  <ul> Developing a shared understanding of each other's viewpoints and experiences.</ul>
                  <ul> Establishing clear boundaries and expectations for future interactions.</ul>
                </li>
              </p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link href="/therapies/tariffs/fm-tariffs"
                        className="block w-fit mt-8 px-6 py-3 text-base font-medium rounded-lg shadow hover:shadow-md transition border border-gray-300 text-black"
                        style={{
                        backgroundColor: '#F3E8D8',
                        minWidth: '260px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        }}>
                            Click here to view <br/>Tariffs
                    </Link>
                  </div>
              </div>
            </div>
            <div className=" fm-bottom-part " style={{
                color: '#6D6D6D'
              }}>
              <h1 className=" h1-styles " 
              >
              FAMILY MEDIATION ISSUES <br/>THAT WE WORK WITH
              </h1>
              <hr className="fm-underline"/>`
              <div className=" fm-box-message " >
                <h2 className=" h2-styles ">
                GUIDING FAMILIES TOWARDS A BRIGHTER FUTURE
                </h2>
                <p className=" p-styles ">
                At TTAMS, we are committed to helping families transition through challenging times with dignity and understanding. Our services emphasise ethical, empathetic, and forward-thinking solutions, enabling families to:​
                </p>
                <p>
                <li className=" p-styles " >
                  <ul> Resolve conflicts without rekindling past relationships or reopening old wounds.</ul> <br/>
                  <ul> Move towards a better future built on mutual respect and clarity.</ul> <br/>
                  <ul> Support the well-being of all family members, particularly children, who are often the most affected by separation and divorce.</ul> <br/>
                </li>
                </p>
                <p className=" p-styles ">
                TTAMS is here to empower families to navigate even the most difficult transitions with grace and confidence.
                </p>               
              </div>
            </div>
            {/* FAMILY & FINANCE CARD SECTIONS */}
            <div className="card-section">
              <div className="card-grid">
                {[
                  {
                    id: 1,
                    title: "WORK PRIORITIES & PARENTAL RESPONSIBILITIES",
                    content: "Balancing commitments with parental responsibilities can be challenging.",
                    more: " especially when financial pressures or job demands strain personal well-being. TTAMS supports participants in exploring options and proposing solutions that promote a healthy-life balance and effective coping arrangements.",
                    image: "/images/therapies-pages/family-mediation/1.svg"
                  },
                  {
                    id: 2,
                    title: "CHILD ARRANGEMENTS",
                    content: "Raising children as a single parent can be overwhelming, especially without adequate...",
                    more: " support or resources. TTAMS provides a confidential space for clients to express their challenges and concerns, ensuring their voices are heard without judgment.",
                    image: "/images/therapies-pages/family-mediation/2.svg"
                  },
                  {
                    id: 3,
                    title: "FAMILY CARE ARRANGEMENTS",
                    content: "Spending time with loved ones, especially as they age or face health challenges, is...",
                    more: " precious. As caregiving responsibilities increase, managing time effectively while balancing other priorities can become overwhelming.​ TTAMS facilitates open dialogue among family members to establish caring arrangements that foster collaboration and respect for each other's boundaries.",
                    image: "/images/therapies-pages/family-mediation/3.svg"
                  },
                  {
                    id: 4,
                    title: "NEW SPOUSE ENGAGEMENT & INTERACTION",
                    content: "As life progresses, our feelings and circumstances may change, prompting...",
                    more: " reflection and consideration of new relationships. Starting anew with a partner may be a choice aimed at one’s life and a nurturing environment for a new family. However, introducing a new partner to children from a previous relationship can lead to disputes about the children's emotional well-being. At TTAMS, we assist participants in navigating these transitions with accountability, ensuring that all are heard and respected. Our aim is to facilitate constructive understanding amidst changing family dynamics.",
                    image: "/images/therapies-pages/family-mediation/4.svg"
                  }
                ].map((card) => (
                  <Card key={card.id} {...card} />
                ))}
              </div>

              <h2 className="fd-heading">FINANCIAL DISPUTE</h2>
              <div className="card-grid">
                {[
                  {
                    id: 5,
                    title: "FINANCIAL AGREEMENTS",
                    content: "We offer support in discussing and agreeing on financial arrangements during separa...",
                    more: " or divorce. Mediation covers a range of issues, including: Division of assets, family home arrangements (including occupancy and timelines), pensions and investments, spousal maintenance, and settlement of bills. Agreements reached are summarised in a Memorandum of Understanding (MOU) and Open Financial Schedule (OFS), which can then be formalised into a legally binding Consent Order.",
                    image: "/images/therapies-pages/family-mediation/5.svg"
                  },
                  {
                    id: 6,
                    title: "FAMILY BUSINESS DISPUTES",
                    content: "TTAMS assists families in finding practical solutions that preserve family connections...",
                    more: " and uphold the integrity of the business. Approaching family business conflicts with empathy and compassion is essential for achieving lasting resolutions that honour both the legacy of the business and the well-being of the family. Conflicts can arise due to neglect, exploitation, or differing opinions on management and decision-making. Mediation focuses on preserving relationships and encouraging communication. TTAMS ensures all voices are heard and respected.",
                    image: "/images/therapies-pages/family-mediation/6.svg"
                  },
                  {
                    id: 7,
                    title: "INHERITANCE DISPUTES",
                    content: "TTAMS is dedicated to assisting families during these difficult times with empathy...",
                    more: " and understanding, rather than deepening divisions. Inheritance disputes often revolve around not just assets but also emotions, fairness, and legacy. TTAMS provides a confidential space to resolve these issues respectfully, promoting acceptance and harmony.",
                    image: "/images/therapies-pages/family-mediation/7.svg"
                  }
                ].map((card) => (
                  <Card key={card.id} {...card} />
                ))}
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </div>
  );
};

export default FamilyMediation;
