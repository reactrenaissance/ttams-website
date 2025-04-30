
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CollapsibleInfo from "@/components/collapsable-info";


function GeneralInformation() {
 
    return (
      <div>
        <div style={{ backgroundColor: '#C2ADAD' }} >
            <Navbar />
            <div className=" gi-banner " ></div>
                    <div className=" gi-bottom-texts " >
                        <div className=" gi-left-text "
                        >
                            <p className=" p-styles "
                            style={{ 
                                margin: '70px 110px',
                            }}
                            >
                            At TTAMS, we are dedicated to offering a holistic well-being service, specialising in therapeutic counselling, family mediation, and community mediation. Our mission is to provide compassionate support to those navigating emotional, psychological, environmental, or financial challenges. Whether facing the aftermath of divorce, separation, or other unforeseen losses, we are here to help individuals find clarity and comfort amidst life’s uncertainties.
                            <br/><br/>While mediation and therapeutic counselling differ in their approaches, at TTAMS, we blend our therapeutic knowledge and skills seamlessly into our mediation work, particularly when engaging with clients within the family mediation process, whilst still upholding the impartiality and non-bias approach of the mediation process.
                            <br/><br/>This is especially crucial when acknowledging emotional difficulties and psychological challenges, ensuring a compassionate and holistic approach to support. 
                            <br/><br/>Our clients emotional and mental well-being is of paramount importance not only to our supportive services but also to society as a whole. We strive to help you maintain or improve your well-being and circumstances while remaining impartial, non-judgemental, and unbiased.
                            </p>
                            <img 
                            src="/images/about-pages/general-information/feather-vector.svg"
                            width="50%"
                            height="50%"
                            />
                        </div>
                        <div 
                        className="gi-right-text"
                        style={{
                            width: '45%', // or even 40%
                            maxWidth: '500px', // restrict absolute width
                            marginLeft: 'auto',
                            marginRight: '30px',
                            marginTop: '40px',
                            marginBottom: '40px',
                            padding: '40px',
                            boxSizing: 'border-box',
                            background: 'linear-gradient(to bottom, #F3E8D8 0%, #E8D8C2 100%)',
                            borderTopLeftRadius: '30px',
                            borderBottomLeftRadius: '30px',
                            borderTopRightRadius: '30px', // add this if you want visible curve
                            borderBottomRightRadius: '30px', // to match screenshot
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                                <CollapsibleInfo
                                    sections={[
                                        {
                                        title: "Disclosure of Information Retainment & Privacy",
                                        fullText:
                                            "We uphold clients confidentiality, including the disclosure of personal documents respectfully, whilst assuming your safety and privacy.",
                                        },
                                        {
                                        title: "Respectful & Attentive Listening",
                                        summary: "We approach each client’s situation with deep attentive listening...",
                                        fullText:
                                            "We approach each client’s situation with deep attentive listening, empathy, genuine regard, authenticity, and respect for their thoughts, feelings, and beliefs. \nOur focus lies in thoughtfully identifying areas where challenges may not have been afforded the necessary urgency or where undue emphasis may have been placed on less pressing concerns.",
                                        },
                                        {
                                        title: "Effective Time Management and Competitive Prices:",
                                        summary: "By steadfastly adhering to the principles of mediation, we have established a service that embodies these values by offering our clients...",
                                        fullText:
                                            "By steadfastly adhering to the principles of mediation, we have established a service that embodies these values by offering our clients the flexibility to select their preferred time and date through the convenience of our online calendar. \nAdditionally, we have thoughtfully integrated an online booking system that includes the option of instalment payments. This approach ensures not only efficiency and fair pricing but also accommodates a schedule that aligns with your unique circumstances and needs.",
                                        },
                                        {
                                        title: "Non-Judgemental Approach",
                                        summary: "We engage with our clients thoughtfully and impartially, free from bias, opinion, or judgement...",
                                        fullText:
                                            "We engage with our clients thoughtfully and impartially, free from bias, opinion, or judgement. \n Our approach is rooted in respect, positive regard with a genuine desire to empower individuals to make their own decisions and take meaningful action. Through fostering self-reflection, we aim to nurture their confidence and sense of agency, always honouring their unique journey.",
                                        },
                                        {
                                        title: "Empowerment",
                                        summary: "We take pride in supporting our clients as they cultivate confidence...",
                                        fullText:
                                            "We take pride in supporting our clients as they cultivate confidence in their chosen areas of interest.\nWith a thoughtful and empathetic approach, we guide our client towards gaining a deeper appreciation of diverse perspectives, offering clarity and understanding where it is most needed.",
                                        },
                                        {
                                        title: "Diverse Support",
                                        summary: "We endeavour to support individuals navigating a diverse array of challenges...",
                                        fullText: 
                                        "We endeavour to support individuals navigating a diverse array of challenges and circumstances, whether they stem from interpersonal conflicts or deeply personal, internal struggles.\nOur approach is rooted in compassion and understanding, recognising the unique journey each person faces."
                                        }
                                    ]}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className=" gi-bottom-part " >
                        <h2 className=" h2-styles " >Regulated Service</h2>
                        <p className=" p-styles " >
                        Our service is committed to adhering to the rigorous standards established by the BACP, FMC, FMA, and the Data Protection Act 1998. Confidentiality is paramount, and no information arising from the mediation process will be disclosed without explicit prior consent.
                        </p>
                        <p className=" p-styles ">
                        At TTAMS, our policies and procedures are thoughtfully designed to reflect these guiding principles, ensuring that all interactions are grounded in professionalism, respect, and care. We strive to provide a supportive environment in which clients and participants can explore their unique circumstances and challenges with confidence and dignity.
                        </p>
                        <p className=" p-styles ">Our aim is to empower individuals to navigate their experiences with resilience and adaptability, fostering personal growth and an improved mental state. By embracing these principles, we help our clients progress towards greater inner peace, enabling them to overcome difficulties while preserving their integrity and sense of self.</p>
                        <p className=" p-styles ">TTAMS remains steadfast in its commitment to uphold the ethical standards of the governing bodies that inspire our work, ensuring that every step forward is taken with compassion and purpose.</p>
                    </div>
                <Footer />
            </div>
      </div>
    );
  }
  
  export default GeneralInformation; 
  