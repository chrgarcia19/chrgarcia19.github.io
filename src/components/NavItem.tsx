"use client"

import Link from "next/link";
import { useState } from "react";

type Props = {
    href: string;
    text: string;
}

const NavItem = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    return (
        <>
            <Link 
                onMouseEnter={itemEntered} 
                onMouseLeave={itemExited}
                href={props.href} 
                className={`text-lg font-semibold shadow-sm rounded-full ease-in-out text-white inline-block px-6 py-1 hover:text-gray-200 ${isHovered ? 'font-bold text-xl shadow-xl' : ''}`}>
                    {props.text}
            </Link>
        </>
    )
} 

export default NavItem;