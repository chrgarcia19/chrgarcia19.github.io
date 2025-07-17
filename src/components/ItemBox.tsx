"use client" 

import { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
    color: String | undefined;
    hoveredColor: String | undefined;
    width: String | undefined;
    boxType: String | undefined;
    padding: String | undefined;
    other: String | undefined; //Additional TailwindCSS Inputs
}; 



const ItemBox = (props: Props) => {

    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    return (
        <>
            <div onMouseEnter={itemEntered} onMouseLeave={itemExited}
                className={`${props.color} ${props.padding} ${props.boxType} ${props.width} h-fit ${props.other} hover:text-gray-200 ${isHovered ? `${props.hoveredColor} font-bold shadow-xl` : ''}`} >
                {props.children}
            </div>
        </>
    );
}

export default ItemBox;