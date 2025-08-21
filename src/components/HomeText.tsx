"use client";

import { useEffect, useState } from "react";

const HomeText = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "A passionate creator of digital solutions.",
    "Coding is both my craft and my curiosity.",
    "Enthusiastic about learning new tools and frameworks.",
    "Eager to support and enhance projects.",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];
    
    if (charIndex < currentPhrase.length) {

      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    } else {
    
      const timeout = setTimeout(() => {
        setIndex(prev => (prev + 1) % phrases.length);
        setCharIndex(0);
        setDisplayText("");
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, [index, charIndex, phrases]);

  return (
    <>
      <div className="z-0 flex items-center justify-center text-5xl max-sm:text-2xl 3xl:text-6xl 4k:text-7xl text-center font-semibold min-h-[1.2em]">
        <span>
          {displayText}
          <span className="animate-pulse">_</span>
        </span>
      </div>
    </>
  );
};

export default HomeText;
