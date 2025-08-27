import C from "@/components/CLogo";
import ItemBox from "@/components/ItemBox";
import CommonLisp from "@/components/LispLogo";
import { DiProlog } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiGo,
  SiRuby,
  SiSwift,
  SiPhp,
  SiScala,
  SiR,
  SiRust,
  SiClojure,
} from "react-icons/si";

const ProgrammingLanguages = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-5 gap-y-7 max-md:gap-4 4k:gap-8  text-center">
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={
              "place-items-center dark:hover:text-black dark:hover:text-black"
            }
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiTypescript className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                TypeScript
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiJavascript className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                JavaScript
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiHtml5 className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                HTML5
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiCss3 className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                CSS3
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <FaJava className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Java
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiPython className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Python 3
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <C />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                C
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiCplusplus className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                C++
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiGo className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Go/Golang
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiRuby className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Ruby
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Swift
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiPhp className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                PHP
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiScala className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Scala
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiR className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                R
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiRust className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Rust
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiClojure className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Clojure
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <CommonLisp />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Lisp
              </p>
            </span>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <DiProlog className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Prolog
              </p>
            </span>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
