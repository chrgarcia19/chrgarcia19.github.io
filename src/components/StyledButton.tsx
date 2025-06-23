"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
    href: string;
    text: string;
    color: string;
    hoveredColor: string;
    icon: ReactNode; // The React Icon that will act as the button
}

const StyledButton = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    return (
        <>
        {props.icon === undefined && (
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href}  
                className={`${props.color} text-lg font-semibold shadow-sm rounded-full ease-in-out text-white inline-block px-6 py-1 hover:text-gray-200 ${isHovered ? `${props.hoveredColor} font-bold text-xl shadow-xl` : ''}`}>
                    {props.text}
            </Link>
        ) || (
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href}  
                className={`${props.color} flex justify-center items-center shadow-sm rounded-3xl px-4 py-1 ease-in-out text-white ${isHovered ? `${props.hoveredColor} shadow-xl` : ''}`}>
                    {props.icon}
            </Link>
        )}
            
        </>
    )
} 

export default StyledButton;