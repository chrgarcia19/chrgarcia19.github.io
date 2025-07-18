'use client'

import { useEffect, useState } from "react";

const HomeText = () => {
    const phrases = [
        "A passionate creator of digital solutions.",
        "Coding is both my craft and my curiosity.",
        "Enthusiastic about learning new tools and frameworks.",
        "Eager to support and enhance projects.",
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % phrases.length);
                setFade(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <>
            <div className={`flex items-center justify-center text-5xl font-semibold transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                {phrases[index]}
            </div>
        </>
    );



}

export default HomeText;