"use client";

import { useEffect, useState } from "react";

const HomeText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [displayTyping, setDisplayTyping] = useState("_");
  const [phraseComplete, setPhraseComplete] = useState(false);

  useEffect(() => {
    const phrases = [
      "A passionate creator of digital solutions.",
      "Coding is both my craft and my curiosity.",
      "Enthusiastic about learning new tools and frameworks.",
      "Eager to support and enhance projects.",
    ];

    const currentPhrase = phrases[index];
    
    if (charIndex < currentPhrase.length) {

      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    } else {
      setPhraseComplete(true);
      setDisplayTyping("");

      const timeout = setTimeout(() => {
        setIndex(prev => (prev + 1) % phrases.length);
        setCharIndex(0);
        setDisplayText("");
        setPhraseComplete(false);
        setDisplayTyping("_")
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, [index, charIndex]);

  return (
    <>
      <div className="z-0 flex items-center justify-center text-5xl max-sm:text-2xl text-center font-semibold min-h-[1.2em]">
        <span className={phraseComplete ? "animate-pulse" : ""}>
          {displayText}
          <span className="animate-ping">{phraseComplete ? "" : "_"}</span>
        </span>
      </div>
    </>
  );
};

export default HomeText;
