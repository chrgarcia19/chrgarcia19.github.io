import ItemBox from "@/components/ItemBox";
import { FaJava } from "react-icons/fa";
import {
  SiJunit5,
  SiNextdotjs,
  SiNextui,
  SiReact,
  SiRubyonrails,
  SiSwift,
  SiTailwindcss,
} from "react-icons/si";

const FrameworksLibraries = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-10 max-md:gap-5 4k:gap-16 text-center">
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiNextdotjs className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Next.js
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiReact className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                React
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiTailwindcss className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                TailwindCSS
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiRubyonrails className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Ruby on Rails
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                SwiftUI
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiNextui className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                HeroUI
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <FaJava className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                JavaFX
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <FaJava className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Java Swing
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center duration-150 transition-all"}
            hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiJunit5 className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                JUnit
              </p>
            </span>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default FrameworksLibraries;
