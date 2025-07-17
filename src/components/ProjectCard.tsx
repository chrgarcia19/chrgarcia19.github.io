"use client"

import Image, { StaticImageData } from "next/image";
import StyledButton from "./StyledButton";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import ItemBox from "./ItemBox";

type Props = {
    link: string; // The url for the project page
    image: StaticImageData; // The path/address to the image
    imageAlt: string; // The alternative words if the image cannot be accessed
    name: String; // The name of the project
    description: String; // The description of the project
    skills: String[]; //The skills used on the project
};

const ProjectCard = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);
    

    return (
        <>
            <div onMouseEnter={itemEntered} onMouseLeave={itemExited} 
                className={`flex flex-col rounded-2xl border-2 border-gray-400 w-1/4 overflow-hidden ${isHovered ? `shadow-xl` : ''}`}>
                <div className="relative w-full h-[300px]">
                    <Image className="object-cover object-center" src={props.image} alt={props.imageAlt} fill sizes="100vw" />
                </div>
                <div className="flex flex-col p-4 w-full">
                    <p className="font-bold text-xl underline">{props.name}</p>
                    <p>{props.description}</p>
                    <span className="p-1">
                    <p className="font-bold underline">Skills Used:</p>
                    <div className="flex flex-wrap gap-2 p-2">
                        {props.skills.map((skill: String, index: number) => (
                            <>
                                <ItemBox key={index} color={"bg-blue-950"} hoveredColor={"bg-blue-800"} width={undefined} boxType={"rounded-full"} padding={"px-3"} other={"text-white"}>
                                    {skill}
                                </ItemBox>
                            </>
                        ))}
                    </div>
                    </span>
                    <div className="flex p-2">
                        <StyledButton href={props.link} text={"GitHub"} color={"bg-green-500"} hoveredColor={"bg-green-200"} icon={<SiGithub />} other={"w-full text-center"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;