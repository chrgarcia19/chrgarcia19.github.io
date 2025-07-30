"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
    href: string;
    text: string;
    textSize: string;
    padding: string;
    color: string;
    hoveredColor: string;
    icon: ReactNode; // The React Icon that will act as the button 
    other: string; //Other CSS styling
}

const StyledButton = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    return (
        <>
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href}  
                className={`${props.color} ${props.textSize} max-lg:border-2 text-center font-semibold shadow-sm rounded-full ease-in-out text-white ${props.padding} hover:text-gray-200 ${isHovered ? `${props.hoveredColor} font-bold text-xl shadow-xl` : ''} ${props.other}`}>
                    <div className="flex flex-row items-center justify-center gap-1">
                        {props.icon} {props.text}
                    </div>
                    
            </Link>

            
        </>
    )
} 

export default StyledButton;