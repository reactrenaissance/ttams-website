import React, { useState } from "react";

interface Section {
  title: string;
  summary?: string; // Make summary optional
  fullText: string;
}

interface CollapsibleInfoProps {
  sections: Section[];
}

const CollapsibleInfo: React.FC<CollapsibleInfoProps> = ({ sections }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // helper to render line breaks
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
        <br />
      </span>
    ));
  };

  return (
    <div style={{ padding: "40px", color: "#0a0a0a" }}>
      {sections.map((section, index) => {
        const isExpandable = !!section.summary;
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={index}
            style={{
              marginBottom: "40px",
              borderBottom: "1px solid white",
              paddingBottom: "20px",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: 600 }}>
              {section.title}
            </h2>

            {/* For sections with no summary — always show full text */}
            {!isExpandable && (
              <p style={{ marginTop: "10px" }}>
                {renderWithLineBreaks(section.fullText)}
              </p>
            )}

            {/* Expandable ones — show summary or full text */}
            {isExpandable && !isExpanded && (
              <p style={{ marginTop: "10px" }}>{section.summary}</p>
            )}
            {isExpandable && isExpanded && (
              <p style={{ marginTop: "10px" }}>
                {renderWithLineBreaks(section.fullText)}
              </p>
            )}

            {/* Read more / less toggle */}
            {isExpandable && !isExpanded && (
              <button
                onClick={() => toggleExpand(index)}
                style={{
                  marginTop: "10px",
                  background: "none",
                  border: "none",
                  color: "#1a1a1a",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Read more
              </button>
            )}

            {isExpandable && isExpanded && (
              <button
                onClick={() => toggleExpand(index)}
                style={{
                  display: "block",
                  marginTop: "20px",
                  background: "none",
                  border: "none",
                  color: "#1a1a1a",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Read less
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CollapsibleInfo;
