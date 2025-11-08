import React from "react";
import "./CarouselSponsors.css";

const CarouselSponsors = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) {
    return <p className="no-sponsors">No sponsors available.</p>;
  }

  return (
    <div className="sponsor-section">
      <h2 className="sponsor-title">Our Sponsors</h2>

      <div className="sponsor-container">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <img
              src={sponsor.image || "/monsterlogo.png"} // fallback logo
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSponsors;
