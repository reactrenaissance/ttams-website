import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";
import FamilyCounsellingCards from "@/components/family-counselling-cards";



function FamilyCounselling() {
  return (
    <div>
      <div style={{
        backgroundColor: "#F3E8D8"
      }} >
        <Navbar />
      </div>
        <div style={{
          backgroundColor: "#D3CCBA"
        }} >
          <div className=" fc-top-half " >
            <div className=" fc-top-left " >
              <h1 style={{
                fontSize: '5vh',
                color: 'black',
              }} >
                Family <br/> Counselling
                <br/><br/>
                </h1>
              <p style={{
                color: "#915835"
              }}
              >
              We believe that every family has the potential to thrive under strong and constructive family principles, in which should be at the foundation of every family.
                <br/>
                We believe that it's a crucial for all individual involved that makeup any family, naturally contributes their own uniqueness that should be positively cultivated by all members of their family for the best collective harmonious well-being outcome.
                <br/><br/>
                TTAMS family counselling approach is designed to address a range of issues, unique to each family’s dynamics, in which our tailored solutions are grounded in established counselling theories.​​
                Our goal is to enhance communication, foster understanding, and create a supportive 
                <br/>
                Whether you're dealing with behavioural issues, navigating parent-child conflicts, or managing caregiving responsibilities, TTAMS is here to help you build a stronger, more cohesive family unit.
              </p>
            </div>
            <div>
              <img 
              src="/images/therapies-pages/family-counselling/fc-top-right.svg"
              alt="banner"
              className=" fc-top-right "
              />
            </div>
          </div>
          <div className=" fc-mid-half " >
            <div className=" fc-mid-left " >
              <img 
              src="/images/therapies-pages/family-counselling/fc-mid-left.svg"
              alt="patterns"
              />
              <h2 style={{
                fontSize: "130%",
                margin: '9% 0% 0% 5%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >RELATIONSHIP SESSION FEE: £160</h2>
              <p style={{
                margin: '1% 5%',
                color: "#915835",
              }}>EACH SESSION IS 80 MINUTES (1 HOUR 20 MINUTES)FOR 3 PEOPLE ONLY
              </p>
              <h2 style={{
                fontSize: "130%",
                margin: '0% 5%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >RELATIONSHIP SESSION FEE: £180</h2>
              <p style={{
                margin: '1% 5%',
                color: "#915835",
              }}> EACH SESSION IS 110 MINUTES (1 HOUR 50 MINUTES) FOR 3 PEOPLE ONLY​
              </p>
              <h2 style={{
                fontSize: "130%",
                margin: '0% 5%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >RELATIONSHIP SESSION FEE: £220</h2>
              <p style={{
                margin: '0% 5%',
                color: "#915835",
              }}>EACH SESSION IS 140 MINUTES (2 HOUR 20 MINUTES)FOR 3 PEOPLE ONLY​
              <br/><br/>
              </p>
              <p style={{
                margin: '0% 5%',
                color: "#915835",
                fontSize: '88%',
                fontStyle: 'italic', 
              }}
              >
              EACH ADDITIONAL PARTAKER'S  OF SESSION IS ADDITIONAL £30
              </p>
              <p style={{
                margin: '4% 5%',
                color: "#915835",
                fontWeight: 'bold', 
              }}>
              For price tariffs please press the 'More Info' Button below
              </p>
              <div className=" fc-more-button " >
                <Link href="/therapies/tariffs/fc-tariffs"
                  style={{
                    backgroundColor: "#F3E8D8",
                    width: "110px",
                    height: "5.8vh",
                    textAlign: "center",
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: "69%",
                    color: "#915835",
                  }}
                >  
                  <button>More info</button>
                </Link>
              </div>
            </div>
            <div className="fc-mid-right" style={{
                    backgroundColor: "#F3E8D8",
                    width: "500px",
                    // height: "auto",
                    textAlign: "center",
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: "19%",
                    color: "#915835",
                  }}>
              <h2 style={{
                fontSize: "120%",
                margin: '8% 0px 0px 0px%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >FAMILY COUNSELLING COMMITMENT AIMS</h2>
              <h3 style={{
                fontSize: "110%",
                margin: '8% 0px 0px 0px%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >COMPREHENSIVE SUPPORT</h3>
              <p style={{
                margin: '2%'
              }} > <br/>
                We integrate various counselling theories to provide holistic support tailored to the unique needs of each family. Our approach emphasises understanding individual roles within the family and fostering a supportive environment for all members.
                </p>
              <h3 style={{
                fontSize: "110%",
                // margin: '8% 0px 0px 0px%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >ENCOURAGING OPEN CONVERSATIONS</h3>
              <p>
              By assisting our clients in resolving their challenges, we aim to facilitate conversations that create space for mutual understanding. This empowers families to develop healthier dynamics and more thoughtful consideration of each other’s needs.
              </p>
              <h3 style={{
                fontSize: "110%",
                // margin: '8% 0px 0px 0px%',
                color: "#915835",
                fontWeight: 'bold',
              }}
              >ADAPTING PARENTING STYLES</h3>
              <p>We guide parents in adjusting their parenting approaches to better meet their children’s evolving needs. This includes maintaining a nurturing and supportive relationship while upholding appropriate boundaries to ensure the child’s overall well-being.</p>
            </div>
          </div>
          {/* Bottom half */}
          <FamilyCounsellingCards />
        <Footer/>
      </div>
    </div>
  );
};

export default FamilyCounselling;
