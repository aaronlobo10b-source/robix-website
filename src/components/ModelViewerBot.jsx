/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ModelViewerBot.css";

const FADE_DURATION = 700;

const ModelViewerBot = ({ modelUrl }) => {
  const [step, setStep] = useState(0);
  const [isTalking, setIsTalking] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [fading, setFading] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const typingInterval = useRef(null);

  // 🧠 Updated text array
  const introTexts = [
    "Translation: Hello there. Welcome to ROBIX CRCE’s official website.",
    "Translation: I can guide you through our projects, events, and team.",
  ];

  // ✅ Fixed typewriter so first letter never gets skipped
  const startTypingEffect = (text) => {
    setDisplayText("");
    setIsTalking(true);

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => console.warn("Audio playback blocked until user interaction."));
      }
    }

    let index = -1; // Start BEFORE first character
    typingInterval.current = setInterval(() => {
      index++;
      setDisplayText((prev) => prev + text.charAt(index));

      if (index >= text.length - 1) {
        clearInterval(typingInterval.current);
        if (audio) audio.pause();
        setIsTalking(false);
      }
    }, 60);
  };

  useEffect(() => {
    startTypingEffect(introTexts[0]);
    return () => clearInterval(typingInterval.current);
  }, []);

  const handleNext = () => {
    if (typeof step === "number" && step < introTexts.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      startTypingEffect(introTexts[nextStep]);
    } else {
      setStep("menu");
      setIsTalking(false);
    }
  };

  const navigateWithFade = (path) => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    clearInterval(typingInterval.current);

    setFading(true);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setFading(false), 100);
    }, FADE_DURATION);
  };

  return (
    <div className="intro-page">
      {/* 🔹 Robix logo top-left */}
      <img src="/robix_logo.png" alt="Robix Logo" className="robix-logo" />

      {/* 🔹 Instagram icon top-right */}
      <a
        href="https://www.instagram.com/robix.crce"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-icon"
      >
        <img src="/images/instagram_neon.png" alt="Instagram" />
      </a>

      <div className="scene-container">
        {/* Bot text box */}
        <div className="bot-textbox">
          {step !== "menu" ? (
            <>
              <p>{displayText}</p>
              <button className="next-btn" onClick={handleNext}>
                Next →
              </button>
            </>
          ) : (
            <>
              <p>What would you like to explore?</p>
              <div className="menu-buttons">
                <button onClick={() => navigateWithFade("/events")}>Events</button>
                <button onClick={() => navigateWithFade("/projects")}>Projects</button>
                <button onClick={() => navigateWithFade("/sponsors")}>Sponsors</button>
                <button onClick={() => navigateWithFade("/team")}>Team</button>
              </div>
            </>
          )}
        </div>

        {/* R2D2 hologram */}
        <div className={`bot-container ${isTalking ? "talking" : ""}`}>
          <model-viewer
            src={modelUrl}
            alt="Robix Bot"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            disable-zoom
            interaction-prompt="none"
            style={{ width: "100%", maxWidth: "700px", height: "500px" }}
          />
          <div className="model-glow-floor" />
        </div>

        <audio ref={audioRef} src="/sounds/r2d2_beep.mp3" preload="auto" />
      </div>

      {/* Fade overlay */}
      <div className={`fade-overlay ${fading ? "active" : ""}`} />
    </div>
  );
};

export default ModelViewerBot;
