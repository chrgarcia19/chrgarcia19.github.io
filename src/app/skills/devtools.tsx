import ItemBox from "@/components/ItemBox";
import {
  SiApache,
  SiGit,
  SiGithub,
  SiGnubash,
  SiIntellijidea,
  SiJson,
  SiMongoose,
  SiVsco,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const DeveloperTools = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-10 max-md:gap-5 4k:gap-16 text-center">
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiGit className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Git
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
              <SiGithub className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                GitHub
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
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Application Programming Interface (API)
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
              <SiGnubash className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Scripting (Shell & Bash)
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
              <SiJson className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                JSON
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
              <SiMongoose className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Mongoose
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
              <SiApache className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Apache HTTP Server
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
              <VscVscode className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Visual Studio Code
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
              <SiIntellijidea className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                IntelliJ
              </p>
            </span>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default DeveloperTools;
