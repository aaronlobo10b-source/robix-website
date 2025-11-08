import React, { useEffect, useRef } from 'react';
import './ScrollVelocityMarquee.css';

const ScrollVelocityMarquee = ({ text }) => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const speed = window.scrollY * 0.1; // change factor as needed
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(-${speed}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="marqueeContainer">
      <div className="marqueeText" ref={marqueeRef}>{text}</div>
    </div>
  );
};

export default ScrollVelocityMarquee;
