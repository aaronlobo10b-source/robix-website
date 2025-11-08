import React from "react";
import Tilt from "react-parallax-tilt";
import "./ProfileCard.css";

const ProfileCard = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
}) => {
  return (
    <Tilt
      tiltEnable={enableTilt}
      glareEnable={true}
      glareMaxOpacity={0.4}
      perspective={1000}
      transitionSpeed={2000}
      glareColor="#00fff0"
      glareBorderRadius="16px"
      className="profile-card"
    >
      <div className="card-inner">
        <div className="card-frame">
          <img src={avatarUrl} alt={name} className="card-avatar" />
        </div>

        {showUserInfo && (
          <>
            <h3 className="card-name">{name}</h3>
            <p className="card-title">{title}</p>
            <p className="card-handle">@{handle}</p>
            <span className={`status ${status.toLowerCase()}`}>{status}</span>
          </>
        )}

        <button onClick={onContactClick} className="contact-btn">
          {contactText}
        </button>
      </div>
    </Tilt>
  );
};

export default ProfileCard;
