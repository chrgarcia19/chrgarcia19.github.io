"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
    href: string;
    text: string | undefined;
    color: string;
    hoveredColor: string;
    icon: ReactNode | undefined; // The React Icon that will act as the button 
    other: string | undefined; //Other CSS styling
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
                className={`${props.color} text-lg font-semibold shadow-sm rounded-full ease-in-out text-white inline-block px-6 py-1 hover:text-gray-200 ${isHovered ? `${props.hoveredColor} font-bold text-xl shadow-xl` : ''} ${props.other}`}>
                    {props.text}
            </Link>
        ) || props.text === undefined && (
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href}  
                className={`${props.color} flex justify-center items-center shadow-sm rounded-3xl px-4 py-1 ease-in-out text-white ${isHovered ? `${props.hoveredColor} shadow-xl` : ''} ${props.other}`}>
                    {props.icon}
            </Link>
        ) || (
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href}  
                className={`${props.color} text-lg font-semibold shadow-sm rounded-full ease-in-out text-white px-6 py-1 hover:text-gray-200 ${isHovered ? `${props.hoveredColor} font-bold text-xl shadow-xl` : ''} ${props.other}`}>
                    <div className="flex flex-row items-center justify-center gap-1">
                        {props.icon} {props.text}
                    </div>
                    
            </Link>
        )}
            
        </>
    )
} 

export default StyledButton;