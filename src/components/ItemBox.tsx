"use client" 

import { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
    color: String;
    hoveredColor: String;
    width: String;
    boxType: String;
    padding: String;
    other: String; //Additional TailwindCSS Inputs
}; 



const ItemBox = (props: Props) => {

    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    return (
        <>
            <div onMouseEnter={itemEntered} onMouseLeave={itemExited}
                className={`${props.color} ${props.padding} ${props.boxType} ${props.width} h-fit ${props.other} hover:text-gray-200 dark:hover:text-white ${isHovered ? `${props.hoveredColor} font-bold shadow-xl` : ''}`} >
                {props.children}
            </div>
        </>
    );
}

export default ItemBox;