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
                className={`flex flex-col rounded-2xl border-4 border-slate-400 dark:border-slate-700 w-1/3 max-xl:w-5/12 max-md:w-full 3xl:w-2/5 min-h-full overflow-hidden ${isHovered ? `xl:shadow-xl xl:shadow-slate-500` : ''}`}>
                <div className="relative w-full max-3xl:h-[300px] 3xl:h-[450px] 4k:h-[500px]">
                    <Image className="object-cover object-center" src={props.image} alt={props.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="flex flex-col flex-grow justify-start p-4 4k:p-6 w-full gap-1">
                    <span className="flex xl:flex-row max-md:flex-col items-center pb-2 xl:space-x-4">
                        <p className="font-bold text-2xl max-md:text-xl 3xl:text-3xl 4k:text-5xl underline text-center">{props.name}</p>
                        <div className="p-1">
                            {props.status && (
                                <p className="bg-green-500 dark:bg-green-600 font-semibold w-fit rounded-full px-2 max-xl:px-4 max-xl:py-1 4k:px-5 4k:py-2 text-sm max-md:text-xs 3xl:text-xl 4k:text-3xl text-center">Completed</p>
                            ) || (
                                <p className="bg-yellow-300 dark:bg-yellow-500 font-semibold w-fit rounded-full px-2 max-xl:px-4 max-xl:py-1 4k:px-5 4k:py-2 text-sm max-md:text-xs 3xl:text-xl 4k:text-3xl text-center">In Progress</p>
                            )}
                        </div>
                    </span>
                    <p className="max-md:text-sm 3xl:text-xl 4k:text-2xl">{props.description}</p>
                    <span className="pt-2 pb-2">
                        <p className="font-bold underline 3xl:text-2xl 4k:text-4xl">Skills Used:</p>
                        <div className="flex flex-wrap gap-2 p-2 m-2 place-content-center text-center">
                            {props.skills.map((skill: String, index: number) => (
                                <div key={index}>
                                    <ItemBox color={"bg-blue-800 dark:bg-blue-300"} hoveredColor={"xl:bg-blue-950 xl:dark:bg-blue-600"} width={""} boxType={"rounded-full"} padding={"px-2 3xl:px-4 3xl:py-1"} other={"text-white dark:text-black max-md:text-sm 3xl:text-xl 4k:text-2xl"}>
                                        {skill}
                                    </ItemBox>
                                </div>
                            ))}
                        </div>
                    </span>
                </div>
                <div className="flex justify-end p-4">
                    <StyledButton href={props.link} text={"GitHub"} color={"bg-green-500"} hoveredColor={"bg-green-600"} icon={<SiGithub className="w-6 h-6 3xl:w-8 3xl:h-8 4k:w-10 4k:h-10"/>} other={"w-full text-center"} textSize={"text-lg 3xl:text-2xl"} padding={"py-1"} label={"View This Project's GitHub Page"} title={"View on GitHub"} />
                </div>
            </div>
        </>
    );
}

export default ProjectCard;