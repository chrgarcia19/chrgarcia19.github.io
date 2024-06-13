import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import HoverableImage from "./HoverableImage";

type Props = {
    link: string; // The url for the project page
    image: StaticImageData; // The path/address to the image
    imageAlt: string; // The alternative words if the image cannot be accessed
    name: String; // The name of the project
    description: String; // The description of the project
    tools: String[]; // The tools used to create the project
};

const ProjectCard = (props: Props) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="project-card">
                    <HoverableImage link={props.link} image={props.image} imageAlt={props.imageAlt} />
                    <p className="font-bold text-2xl">{props.name}</p>
                    <span className="p-1">
                        <p className="font-bold underline">Description: </p>
                        <p>{props.description}</p>
                    </span>
                    <span className="p-1">
                        <p className="font-bold underline">Skills Used: </p>
                        <div className="flex flex-wrap gap-3">
                            {props.tools.map((tool: String, index: number) => (
                                    <p key={index} className="rounded-full bg-green-400 px-3 shadow-md">{tool}</p>
                            ))}
                        </div>
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;