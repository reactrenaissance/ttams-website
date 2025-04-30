import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import Link from "next/link";

function RelationshipCounselling() {
  return (
    <div style={{ 
      backgroundColor: "#F3E8D8"
    }} >
      <Navbar />
        <div
            style={{
                width: '100%',
                height: '64vh',
                position: 'relative',
            }}
            >
            <Image
                src="/images/therapies-pages/relationships-counselling/rc-topbanner.svg"
                alt="banner"
                fill
                // style={{ objectFit: 'contain',
                // }}
                priority
            />
            </div>

            <div className=" rc-bottom-half " >
                <div className=" rc-bottom-left " >
                    <p style={{
                        margin: '10% 17%',
                    }} >
                        When we enter a relationship, we embrace the journey, captivated by how our partner has sparked our interest and touched our heart. A natural curiosity arises, fuelled by the desire to understand and connect with this person on a deeper level.
                        <br/><br/>
                        This mutual attraction, free from resistance, invites us to engage with enthusiasm, often seeking to impress in the hope that our feelings and efforts will be reciprocated. This early stage of a relationship is filled with excitement, anticipation, and the promise of meaningful connection.
                        <br/><br/>
                        At the core of every successful relationship lies care, love, and appreciation. Tender Loving Care (TLC) is the foundation for nurturing a healthy and fulfilling partnership, where both individuals feel valued and cherished.
                        <br/><br/>
                        However, as relationships mature, challenges inevitably arise. Changing dynamics and evolving expectations can sometimes lead to communication breakdowns, unresolved conflicts, and unmet needs. These difficulties can strain the connection between partners, resulting in feelings of frustration and disconnection.
                        <br/><br/>
                        At TTAMS, we address these issues by exploring their underlying causes and promoting healthier communication patterns. We help couples understand one another's perspectives by guiding them to resolve conflicts with empathy and patience. Our approach emphasises the importance of truly listening to understand, fostering a more supportive and compassionate dynamic between partners.
                        <br/><br/>
                        By incorporating these practices into daily life, couples can strengthen their bond, deepen their understanding of each other, and build a resilient, loving relationship that endures through life’s complexities.
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </p>
                    <img 
                    src="/images/therapies-pages/relationships-counselling/rc-couple-corner.svg"
                    alt="couple corner"
                    className=" rc-couple-corner "
                    />
                 </div>  
                  {/* Original Bottom Right */}
                {/* <div className=" rc-bottom-right " >
                    <img 
                    src="/images/therapies-pages/relationships-counselling/small-couple-icon.svg"
                    alt="couple icon"
                    className=" rc-couple-icon "
                    />
                    <h1 className=" h1-styles " >TTAMS Relationship aims</h1>
                </div> */}
                <div className=" rc-bottom-right ">
                    <img 
                    src="/images/therapies-pages/relationships-counselling/small-couple-icon.svg"
                    alt="couple icon"
                    className=" rc-couple-icon "
                    />
                    <h1 style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        margin: '10% 17%',
                    }}>
                        TTAMS Relationship aims
                    </h1>
                    <p style={{
                        margin: '10% 17%',
                    }} >
                        At TTAMS, we are dedicated to working collaboratively with our clients as they navigate conflicts and challenges within their relationships. We provide effective, therapeutic support that honours the autonomy and well-being of both individuals, ensuring that each person feels valued and heard throughout the process.​
                        <br/><br/>
                        Relationships often involve unique dynamics and differing perceptions, which can lead to misunderstandings or tensions. At TTAMS, we create a safe and supportive space where both participants can openly express their thoughts, emotions, and concerns without fear of judgment or dismissal. By encouraging honest and empathetic communication, we help couples address the complexities of their relationship for better clarity and understanding.
                        <br/><br/>
                        Our approach focuses on helping each partner gain insight into the other's perspective, fostering a deeper understanding that may bring a level of better awareness for each other’s their experiences, values, and needs. Through this process, we aim to bridge gaps in communication, build mutual respect, and cultivate a stronger foundation for communication and growth.
                        <br/><br/>
                        By working together in this way, couples can uncover new ways to approach challenges, resolve conflicts, and enhance their relationship. At TTAMS, we believe that with the right guidance and a commitment to understanding, every partnership has the potential to thrive.
                    </p>
                    <Link href="/therapies/tariffs/rc-tariffs"
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
            <Footer />
    </div>
  );
};

export default RelationshipCounselling;
