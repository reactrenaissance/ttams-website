import { useState } from 'react';
import Image from 'next/image';

const cardData = [
  {
    title: 'FAMILY ADVERSITY AFTER DIVORCE AND SEPARATION',
    image: '/images/therapies-pages/family-counselling/1.svg',
    summary: 'We recognise the profound impact that divorce or separation can have on a family, particularly on children...',
    fullText: `We recognise the profound impact that divorce or separation can have on a family, particularly on children. These situations often follow an affair or occur when one partner falls out of love with their spouse.

                The emotional upheaval and sense of instability can be overwhelming for young minds, potentially leading to anxiety, insecurity, and challenges in forming trusting relationships in the future. The loss of such a primary emotional bond can create a profound sense of vulnerability and confusion.

                Children, in particular, may struggle with the stress and uncertainty brought on by these changes, and this can manifest in various emotional or behavioural ways.

                At TTAMS, we provide compassionate support to families navigating these challenging times. We offer a private and safe space for open communication, allowing all family members to address their emotional needs freely and without judgment.

                Our goal is to help families restore a sense of stability and foster mutual understanding, offering greater clarity and connection during this difficult period.

                Through tailored counselling services, we support all family members in processing their emotions, building resilience, and promoting healthy adjustments, particularly for children, so they can move forward with confidence and faith.`
                },
  {
    title: 'PARENTAL & CHILD CONFLICT DYNAMICS',
    image: '/images/therapies-pages/family-counselling/2.svg',
    summary: 'As children grow and seek independence, shifts in family dynamics can lead to conflicts with parents...',
    fullText: `As children grow and seek independence, shifts in family dynamics can lead to conflicts, with parents may struggle to adapt to their children's evolving needs, resulting in misunderstandings and tensions.
                Sharing household responsibilities can sometimes become a source of tension, particularly when expectations are unclear, unmet, or when contributions are perceived as unfair or unreasonable, that can lead to a sense of being undervalued.

                This adjustment period can be challenging, causing strain in the parent-child relationship as each party navigates new roles and expectations.

                At TTAMS, we provide support to both parents and children, helping them navigate these changes with patience and understanding. By exploring family patterns and enhancing communication, we foster a more harmonious home environment.

                By seeing the value in collaborating, this promotes cooperation to work together in a way that sustains a balanced approach and better understanding, families can reduce stress, build stronger relationships that can maintains a more harmonious household.

                To foster a sense of and harmony, open and honest communication is essential. This includes discussing and setting clear expectations, acknowledging individual capacities and commitments, and ensuring that responsibilities are distributed in a fair and manageable way.

                Encouraging open dialogue and mutual understanding between parents and children can alleviate tensions and promote a supportive family atmosphere. We facilitate these conversations, ensuring that both parties feel heard and respected.`
                },
  {
    title: 'ANTISOCIAL BEHAVIOUR AND DISRUPTIVE LOITERING',
    image: '/images/therapies-pages/family-counselling/3.svg',
    summary: 'The family environment ideally serves as a foundation of unconditional support and',
    fullText: `The family environment ideally serves as a foundation of unconditional support and acceptance, offering a safe space for individuals to express themselves freely. However, when relationships within the family become strained or communication breaks down, it can give rise to tensions, avoidance, and, in some cases, inappropriate behaviours such as antisocial activity or loitering.
Antisocial behaviour and loitering often stem from deeper issues, such as unresolved conflicts, feelings of neglect, or a lack of clear boundaries within the family unit. Over-familiarity or blurred lines in familial roles can exacerbate these problems, creating discomfort and disrupting the natural balance of family dynamics. Children and adolescents, in particular, may exhibit these behaviours as a way to assert independence, seek attention, or cope with underlying emotional distress.
Left unaddressed, these issues can escalate, leading to further breakdowns in relationships and a negative impact on the overall family atmosphere. The visible signs, such as loitering or engaging in disruptive activities, are often just the surface of deeper emotional or relational struggles within the family.

At TTAMS, we recognise the complex interplay of factors that contribute to antisocial behaviour and loitering. Our approach involves identifying the root causes behind these behaviours, whether they stem from unmet emotional needs, unclear expectations, or boundary issues.
We offer tailored interventions designed to address these challenges, helping families to rebuild trust, establish healthy boundaries, and create a more supportive and harmonious environment. Through open dialogue and practical strategies, we empower family members to improve communication, resolve conflicts, and foster a renewed sense of connection and cooperation.
By addressing these behaviours within the context of the entire family dynamic, we not only help mitigate the immediate issues but also lay the groundwork for healthier, more respectful interactions moving forward. This holistic approach ensures that every family member feels heard, valued, and supported as they work together to restore balance and harmony.`
  },
  {
    title: 'HOUSEHOLD & COMMUNAL DISRUPTIVE BEHAVIOUR',
    image: '/images/therapies-pages/family-counselling/4.svg',
    summary: 'Coping with a family member’s issues, whether recreational or personal can be deeply ',
    fullText: `Coping with a family member’s issues, whether recreational or personal can be deeply challenging, particularly when it affects the stability of the household or disrupts relationships with external family members, such as a cousin or uncle.



The strain often extends beyond the individual, potentially creating financial difficulty, emotional distress, due to misplaced priorities that can ripple throughout the family dynamic, leaving some family members feeling overwhelmed, helpless, or even resentful.


At TTAMS, we recognise the delicate balance required to address these challenges. We emphasise the importance of maintaining positive regard for the individual struggling with their issue while acknowledging the broader impact on family life. Financial strain and the demands of daily life can often compound the stress, making it even harder for families to find a path forward, especially if the family is dealing with drug addictions and the battling efforts in intervention.


Our comprehensive support service is designed to help families develop healthy coping mechanisms, address issues of misplaced priorities, and foster open, empathetic communication. By creating a supportive environment, we aim to not only assist the individual in recovery but also to help families regain their footing, manage financial challenges, and restore a sense of order and stability to their lives.


By considering the entire family dynamic, we strive to rebuild harmony and ensure that each member feels valued and supported. This approach encourages healthier relationships, improved decision-making, and a clearer sense of purpose within the family unit.`
  },
  {
    title: 'HOUSEHOLD CONTRIBUTIONS',
    image: '/images/therapies-pages/family-counselling/5.svg',
    summary: 'Sharing household responsibilities among family members can sometimes become a source of ',
    fullText: `Sharing household responsibilities among family members can sometimes become a source of tension, particularly when expectations are unclear, unmet, or when contributions are perceived as unequal. These imbalances can lead to feelings of frustration, resentment, or even a sense of being undervalued among family members.
To foster a sense of cooperation and harmony, open and honest communication is essential. This includes discussing and setting clear expectations, acknowledging individual capacities and commitments, and ensuring that responsibilities are distributed in a fair and manageable way. Regular family meetings can provide a platform for addressing any concerns, adjusting tasks as needed, and celebrating each member's contributions.
By promoting mutual understanding and working together to create a balanced approach, families can reduce stress, build stronger relationships, and maintain a more harmonious household.

By promoting regular household meetings to discuss and assign household tasks can prevent misunderstandings and ensure that everyone is contributing fairly. TTAMS facilitates these discussions, helping families to create equitable and manageable systems for sharing responsibilities.
`
  },
  {
    title: 'CARING FOR A FAMILY MEMBER',
    image: '/images/therapies-pages/family-counselling/6.svg',
    summary: 'Providing care for a family member can be an emotionally and physically demanding ',
    fullText: `Providing care for a family member can be an emotionally and physically demanding experience, particularly when balancing these responsibilities alongside the needs of one's own immediate family. The immense effort and selflessness shown by carers often go unnoticed or underappreciated, leading to a profound sense of disappointment and emotional strain. These feelings, coupled with the weight of caregiving, can sometimes manifest as helplessness or resentment, ultimately disrupting family harmony.
Conflicts frequently arise over the distribution of caregiving responsibilities, as expectations and levels of support may differ among family members. Primary carers often shoulder the majority of the burden, which can be overwhelming without adequate recognition or assistance from others. This lack of collaboration can create further tension and exacerbate feelings of isolation or frustration.
At TTAMS, we understand the unique challenges faced by family carers and are dedicated to offering practical strategies to manage these responsibilities effectively. Our approach emphasises the importance of open and honest communication among family members to address concerns and establish realistic expectations. Clear delegation of caregiving roles is also critical, ensuring that the primary carer is not left to carry the load alone.
We encourage the involvement of all family members, including extended relatives such as cousins, aunts and or uncles, to create a fair and balanced system of support. By engaging everyone in the caregiving process, we help families foster a spirit of cooperation and shared responsibility.
`
  }
];

export default function FamilyCounsellingCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
        <div className="fc-bottom-half">
          <div className="fc-card-grid">
            {cardData.map((card, index) => {
              const isExpanded = expandedIndex === index;
      
              return (
                <div key={index} className="fc-card">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="fc-card-image"
                  />
                  <div className="fc-card-content">
                    <h3>{card.title}</h3>
                    {!isExpanded && card.summary && (
                      <>
                        <p>{card.summary}</p>
                        <button onClick={() => toggleExpand(index)} className="fc-toggle">
                          Read more
                        </button>
                      </>
                    )}
                    {isExpanded && (
                      <div className="fc-card-expand">
                        {card.fullText.split('\n').map((para, i) => (
                          <p key={i}>{para.trim()}</p>
                        ))}
                        <button onClick={() => toggleExpand(index)} className="fc-toggle">
                          Read less
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}