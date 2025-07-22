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
    status: Boolean; //If the project is in progress (False) or completed (True)
};

const ProjectCard = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);
    

    return (
        <>
            <div onMouseEnter={itemEntered} onMouseLeave={itemExited} 
                className={`flex flex-col rounded-2xl border-2 border-slate-400 dark:border-slate-700 w-1/3 overflow-hidden ${isHovered ? `shadow-xl shadow-slate-500` : ''}`}>
                <div className="relative w-full h-[300px]">
                    <Image className="object-cover object-center" src={props.image} alt={props.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="flex flex-col p-4 w-full">
                    <span className="flex flex-row items-center space-x-3">
                        <p className="font-bold text-xl underline">{props.name}</p>
                        {props.status && (
                            <p className="bg-green-500 w-fit rounded-full px-2 text-sm">Completed</p>
                        ) || (
                            <p className="bg-yellow-300 w-fit rounded-full px-2 text-sm">In Progress</p>
                        )}
                    </span>
                    <p>{props.description}</p>
                    <span className="p-1">
                    <p className="font-bold underline">Skills Used:</p>
                    <div className="flex flex-wrap gap-2 p-2 m-2 place-content-center">
                        {props.skills.map((skill: String, index: number) => (
                            <div key={index}>
                                <ItemBox color={"bg-blue-950 dark:bg-blue-300"} hoveredColor={"bg-blue-800"} width={""} boxType={"rounded-full"} padding={"px-2"} other={"text-white dark:text-black"}>
                                    {skill}
                                </ItemBox>
                            </div>
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