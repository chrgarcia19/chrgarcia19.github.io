import Image, { StaticImageData } from "next/image";
import StyledButton from "./StyledButton";

type Props = {
    link: string; // The url for the project page
    image: StaticImageData; // The path/address to the image
    imageAlt: string; // The alternative words if the image cannot be accessed
    name: String; // The name of the project
    description: String; // The description of the project
    tools: String[]; // The tools used to create the project
    concepts: String[]; //The concepts used when creating the project
};

const ProjectCard = (props: Props) => {
    return (
        <>
            <div className="flex flex-col rounded-2xl w-5/12 bg-cyan-300">
                <div className="w-full h-full overflow-hidden rounded-t-2xl">
                    <Image className={"w-full h-auto object-cover rounded-t-2xl"} src={props.image} alt={props.imageAlt} priority/>
                </div>
                <div className="flex flex-col p-4 w-full">
                    <p className="font-bold text-xl">{props.name}</p>
                    <p>{props.description}</p>
                    <span className="p-1">
                            <p className="font-bold underline">Technologies Used: </p>
                            <div className="flex flex-wrap gap-3">
                                {props.tools.map((tool: String, index: number) => (
                                        <p key={index} className="rounded-full bg-green-400 px-3 shadow-md">{tool}</p>
                                ))}
                            </div>
                        </span>
                    <span className="p-1">
                        <p className="font-bold underline">Concepts Used: </p>
                        <div className="flex flex-wrap gap-3">
                            {props.concepts.map((concept: String, index: number) => (
                                    <p key={index} className="rounded-full bg-green-400 px-3 shadow-md">{concept}</p>
                            ))}
                        </div>
                    </span>
                    <div className="flex p-2">
                        <StyledButton href={props.link} text={"View Project"} color={"bg-green-500"} hoveredColor={"bg-green-200"} icon={undefined} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;