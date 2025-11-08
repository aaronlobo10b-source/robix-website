import React, { useEffect, useState } from 'react';
import './DecypheredText.css';

const DecypheredText = ({ text, duration = 2000 }) => {
  const [display, setDisplay] = useState('');
  
  useEffect(() => {
    let timeout;
    let index = 0;
    const scramble = () => {
      if (index < text.length) {
        setDisplay(prev => prev + text[index]);
        index++;
        timeout = setTimeout(scramble, duration / text.length);
      }
    };
    scramble();
    return () => clearTimeout(timeout);
  }, [text, duration]);

  return <div className="decypheredText">{display}</div>;
};

export default DecypheredText;
