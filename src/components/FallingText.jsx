import React, { useEffect, useState } from "react";
import "./FallingText.css";

const FallingText = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="falling-text-container">
      <h1 className={`falling-text ${show ? "show" : ""}`}>
        WELCOME TO THE OFFICIAL ROBIX
      </h1>
      <p className="subtitle">THE CLUB’S MAIN ROBOT WILL BE PLACED ON A COUCH</p>
    </div>
  );
};

export default FallingText;
