import Image from "next/image";
import { sanityClient } from "@/sanity/sanity.client"; 
import Link from "next/link";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export async function getStaticProps() {
  const articles = await sanityClient.fetch(`*[_type == "article"]`);
  return { props: { articles } };
}

export default function Home() {
  return (
    <div className=" container " style={{ backgroundColor: "#BDB097" }} >
      <Navbar/>      
        {/* Main Content */}
        <div className=" main-content ">
          {/* Hero section */}
          <div className=" hero-section ">
          {/* Logo */}
            <div className=" hero-banner-logo-container ">
              <div className=" logo-container ">
                <Image src="/images/home/TTAMS-logo.svg" alt="TTAMS logo" objectFit="contain" layout="fill" className=" logo " />
                {/* Slogan */}
              </div>  
                <h1 className=" slogan ">TAYLOR'D THERAPY & MEDIATION SERVICE</h1>
                <h2>TOGETHER TACKLING ADVERSITIES MEANINGFULLY</h2>                            
            </div>
        </div>
        </div>
          {/* Last Half of page */}     
          <div className="home-bottom-half">
            <div className="ellipse-container">
              <h1>Welcome All</h1>
              <p>
                Welcome to Taylor'd Therapy and Mediation Service where we assist those facing adversities.
                Whether it’s family issues involving parental arrangements, financial, social, or personal
                issues, we’re here to help you re-stabilise a healthy way forward, in the best way possible
                through our professional support.
              </p>
            </div>
          </div>
         <Footer />
    </div>
  );
}
