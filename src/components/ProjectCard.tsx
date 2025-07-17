import Image, { StaticImageData } from "next/image";
import StyledButton from "./StyledButton";
import { SiGithub } from "react-icons/si";

type Props = {
    link: string; // The url for the project page
    image: StaticImageData; // The path/address to the image
    imageAlt: string; // The alternative words if the image cannot be accessed
    name: String; // The name of the project
    description: String; // The description of the project
    skills: String[]; //The skills used on the project
};

const ProjectCard = (props: Props) => {
    return (
        <>
            <div className="flex flex-col rounded-2xl border-2 border-black w-1/4 bg-cyan-300 overflow-hidden">
                <div className="relative w-full h-[300px]">
                    <Image className="object-cover object-center" src={props.image} alt={props.imageAlt} fill sizes="100vw" />
                </div>
                <div className="flex flex-col p-6 w-full">
                    <p className="font-bold text-xl underline">{props.name}</p>
                    <p>{props.description}</p>
                    <span className="p-1">
                    <p className="font-bold underline">Skills Used:</p>
                    <div className="flex flex-wrap gap-2">
                        {props.skills.map((skill: String, index: number) => (
                        <p key={index} className="rounded-full bg-green-400 px-3 shadow-md text-sm">
                            {skill}
                        </p>
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