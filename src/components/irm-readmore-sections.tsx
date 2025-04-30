import { useState } from "react";

function IRMReadMoreSections() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections = [
    {
      title: "THE IMPORTANCE OF COMMUNITY SPIRIT & SUPPORT",
      summary:
        "A strong sense of community spirit enhances well-being and fosters an environment where individuals feel valued and connected....",
      fullText:
        `A strong sense of community spirit enhances well-being and fosters an environment where individuals feel valued and connected.

It encourages neighbours to offer mutual support, creating a network of reliability that benefits everyone, from the elderly needing assistance to young families seeking a sense of belonging.

When nurtured with patience, tolerance, and open communication, communities can thrive and resolve conflicts constructively.

At TTAMS, we are committed to nurturing environments where communities can flourish.

By addressing disputes with grace, patience, and a focus on shared goals, we aim to create spaces where everyone feels heard, valued, and supported.

A healthy community is not just one free from conflict but one that actively encourages cooperation, inclusion, and shared responsibility.`
    },
    {
      title: "COMMUNITY ISOLATION",
      summary:
        "Isolation is a silent epidemic with profound consequences for both mental and physical health, as research has shown that isolation can be...",
      fullText:
        `Isolation is a silent epidemic with profound consequences for both mental and physical health, as research has shown that isolation can be detrimental as smoking or obesity, leading to increased risks of depression, anxiety, self - harm suicide and even premature death.

Unaware to most, some of the conflict that we experience may just be a cry for attention or acknowledgement, especially from those in their senior years, who have faded into the background of our society.

As time goes by and friends and family leave this earthly plane, we too may become the last of what once was, and without our vigour, we may also find it hard to develop new friend groups, as health conditions take their toll.

Community mediation plays a vital role in alleviating these various hardship by promoting inclusivity and empowerment. 

Through mediation, we can identify and address underlying issues that contribute isolation, creating tailored arrangements that bring people together and foster a genuine sense of belonging.

In conclusion, the essence of community mediation is straightforward: to respectfully consider one another.

It’s about nurturing an environment where everyone feels they belong, where young people are guided, the elderly are respected, and every neighbour is at the least amicable and considerate.

At TTAMS, we are dedicated to this vision, striving to ensure that our communities are not just places to live but places where individuals can truly thrive.

Together, we can overcome isolation, build lasting connections, and create a future where the spirit of community is vibrant and alive.

Let us all take a step towards a brighter, more connected future. Let us be the neighbours who care, support, and uplift one another, fostering a community spirit that endures.`
    },
    {
      title: "CHALLENGES OF LONELINESS AND ISOLATION",
      summary:
        "Despite their potential to enrich community life, both young people and the elderly are often among the most vulnerable to feelings of isolation and...",
      fullText:
        `Despite their potential to enrich community life, both young people and the elderly are often among the most vulnerable to feelings of isolation and loneliness.

Elderly individuals may experience physical limitations, the loss of close friends or family, or a diminishing sense of purpose, leading to emotional withdrawal.

Conversely, young people, while surrounded by peers, often face internal pressures, societal expectations, and the isolating effects of antisocial behaviour or peer pressure.

The lack of meaningful intergenerational connections exacerbates these challenges, leaving both groups feeling disconnected from the broader community.`
    },
    {
      title: "SUPPORTING OUR YOUNG AND ELDERLY IN OUR COMMUNITY",
      summary:
        "Young people, with their boundless energy and enthusiasm, represent the vibrant heartbeat of any community...",
      fullText:
        `Young people, with their boundless energy and enthusiasm, represent the vibrant heartbeat of any community.

They bring fresh perspectives, innovation, and vitality that can inspire collective progress. Meanwhile, our elderly neighbours, as custodians of wisdom and experience, embody the steady, reflective core of a community.

Their life stories, lessons, and guidance are invaluable, offering a rich tapestry of knowledge that can anchor and guide younger generations.`
    },
    {
      title: "CULTIVATING PATIENCE, TOLERANCE, AND INCLUSION",
      summary:
        "In creating healthy communities, patience and tolerance are foundational. When disruptive behaviours, such as loitering or antisocial activities, arise among young people, it is essential to address the root causes rather than resorting to judgement...",
      fullText:
        `In creating healthy communities, patience and tolerance are foundational. When disruptive behaviours, such as loitering or antisocial activities, arise among young people, it is essential to address the root causes rather than resorting to judgement. 
        
Peer pressure, unmet expectations, or a lack of positive role models often contribute to such behaviours. 
        
Community mediation can guide young individuals towards constructive involvement while encouraging empathy and understanding among neighbours.`
    },
    {
      title: "ACTS OF KINDNESS",
      summary:
        "Simple gestures of kindness, checking on an elderly neighbour, engaging in shared activities, or offering a listening ear can significantly enhance the...",
      fullText:
        `Simple gestures of kindness, checking on an elderly neighbour, engaging in shared activities, or offering a listening ear can significantly enhance the quality of life for everyone involved.

These acts not only address loneliness but also integrate older adults into the community fabric, allowing their perspectives and experiences to flourish.

For young people, opportunities to contribute positively to the community, such as volunteering, participating in shared initiatives, or engaging in meaningful dialogue can reduce feelings of isolation and foster a deeper sense of belonging.​`
    },
    {
      title: "FOSTERING COMMUNITY HARMONY",
      summary:
        "Community mediation is not just about resolving immediate conflicts; it is about fostering long-term harmony. By working collaboratively, we help communities:...",
      fullText:
        `Community mediation is not just about resolving immediate conflicts; it is about fostering long-term harmony. By working collaboratively, we help communities:

​ • Rebuild trust and mutual respect among neighbours.

 • Develop shared agreements and boundaries that reflect everyone’s needs.

 • Encourage a proactive approach to community support, such as looking out for the elderly or involving young people in positive communal activities.`
    },
    {
      title: "TTAMS' APPROACH TO RESOLVING DISPUTES",
      summary:
        "Our approach to resolving the diverse range of community dispute issues, primarily holds a focused interest developing and initiating open communication between participants for the purpose of providing a clearer understanding...",
      fullText:
        `Our approach to resolving the diverse range of community dispute issues, primarily holds a focused interest developing and initiating open communication between participants for the purpose of providing a clearer understanding. By addressing the root causes of any community conflicts and fostering a collaborative spirit, we aim to restore harmony and respect within the community, by:

1. Facilitating Dialogue:
We create a platform for residents to express their concerns and perspectives.

By encouraging open and respectful dialogue, we help residents understand each other’s viewpoints and work towards mutually beneficial solutions.


2. Establishing Clear Guidelines:
Clear and fair regulations can prevent many disputes.

We assist communities in developing and implementing guidelines that are equitable and easy to understand, reducing ambiguities and potential conflicts.

        
3. Promoting Empathy and Respect:
Through workshops and community activities, we promote the values of empathy and respect.

Understanding the challenges and needs of others can foster a more considerate and cooperative community environment.​

4. Supporting Residents:
​​We provide emotional support for residents dealing with the stress and anxiety resulting from highly intense communal shared areas, shared gardens, and  parking parking bay disputes.

Offering resources and council policy and regulation guidance, we help our participants gain a better understanding of their entitlements so that they can manage their feelings and navigate conflicts more effectively.​
`
    }
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ paddingBottom: "20px" }}>
          <hr
            style={{
              width: "80%",
              margin: "0 auto",
              border: "none",
              borderTop: "1px solid black",
              paddingBottom: "30px",
            }}
          />
          <h2
            className="h2-styles"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            {section.title}
          </h2>
  
          {(expandedSection === index ? section.fullText : section.summary)
            .split("\n\n")
            .map((para, idx) => (
              <p key={idx} className="p-styles">
                {para.trim()}
              </p>
            ))}
  
          <div style={{ textAlign: "center" }}>
            <span
              onClick={() =>
                setExpandedSection(expandedSection === index ? null : index)
              }
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              {expandedSection === index ? "Read less" : "Read more"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IRMReadMoreSections;
