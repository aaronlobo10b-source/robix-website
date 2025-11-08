import React from "react";
import "./LanyardMembers.css";

const LanyardMembers = ({ members }) => {
  return (
    <section className="lanyard-section">
      <h2 className="lanyard-title">Meet The Team</h2>

      <div className="lanyard-grid">
        {members.map((member, index) => (
          <div key={index} className="lanyard-card">
            {/* 🔹 Strap */}
            <div className="lanyard-strap"></div>

            {/* 🔹 ID Card */}
            <div className="lanyard-id swing">
              <img
                src={member.image}
                alt={member.name}
                className="lanyard-photo"
              />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="handle">@robix</p>
              <button
                className="contact-btn"
                onClick={() => alert(`Connecting with ${member.name}`)}
              >
                CONTACT ME
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanyardMembers;
