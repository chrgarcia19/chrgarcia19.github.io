"use client";

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
      <div
        onMouseEnter={itemEntered}
        onMouseLeave={itemExited}
        className={`flex flex-col rounded-2xl border-4 border-slate-400 dark:border-slate-700 w-1/3 max-xl:w-5/12 max-md:w-full 3xl:w-2/5 min-h-full overflow-hidden ${isHovered ? `xl:shadow-xl xl:shadow-slate-500` : ""}`}
      >
        {/* Image containter for project image */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 3xl:h-[450px] 4k:h-[500px]">
          <Image
            className="object-cover object-top"
            src={props.image}
            alt={props.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Content container for project details */}
        <div className="flex flex-col flex-grow justify-start p-4 4k:p-6 w-full gap-1">
          {/* Title section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-2">
            <h3 className="font-bold text-2xl max-md:text-xl 3xl:text-3xl 4k:text-5xl underline text-center">
              {props.name}
            </h3>
            <div className="flex justify-center sm:justify-end">
              {(props.status && (
                <span className="bg-green-500 dark:bg-green-600 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1 4k:px-5 4k:py-2 text-xs sm:text-sm 3xl:text-xl 4k:text-3xl text-white whitespace-nowrap">
                  Completed
                </span>
              )) || (
                <p className="bg-yellow-300 dark:bg-yellow-500 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1 4k:px-5 4k:py-2 text-xs sm:text-sm 3xl:text-xl 4k:text-3xl text-white whitespace-nowrap">
                  In Progress
                </p>
              )}
            </div>
          </div>

          {/* Description section */}
          <p className="text-sm sm:text-base md:text-base 3xl:text-xl 4k:text-2xl dark:text-gray-100 leading-relaxed">
            {props.description}
          </p>

          {/* Skills section */}
          <div className="mt-2 sm:mt-3">
            <h5 className="font-bold underline sm:text-lg 3xl:text-2xl 4k:text-4xl">
              Skills Used:
            </h5>
            <div className="flex flex-wrap gap-2 p-2 m-2 place-content-center text-center">
              {props.skills.map((skill: String, index: number) => (
                <div key={index}>
                  <ItemBox
                    color={"bg-blue-800 dark:bg-blue-300"}
                    hoveredColor={"xl:bg-blue-950 xl:dark:bg-blue-600"}
                    width={""}
                    boxType={"rounded-full"}
                    padding={"px-2 3xl:px-4 3xl:py-1"}
                    other={
                      "text-white dark:text-black max-md:text-sm 3xl:text-xl 4k:text-2xl"
                    }
                  >
                    {skill}
                  </ItemBox>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button(s) Section */}
        <div className="flex justify-center p-4">
          <StyledButton
            href={props.link}
            text={"GitHub"}
            color={"bg-green-500"}
            hovered={"bg-green-600"}
            icon={<SiGithub className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-8 3xl:h-8 4k:w-10 4k:h-10" />}
            other={" text-center"}
            textSize={"text-lg 3xl:text-2xl"}
            padding={"px-3 py-1"}
            label={"View This Project's GitHub Page"}
            title={"View on GitHub"}
            textColor={"text-white"} 
            animation={"transition-all duration-300 ease-in-out"}            
            />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
