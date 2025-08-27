import ItemBox from "@/components/ItemBox";
import { SiAnsible, SiLatex, SiNvidia, SiWireshark } from "react-icons/si";

const AdditionalTools = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-5 gap-y-7 4k:gap-8 max-md:gap-4 text-center">
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 max-md:p-2 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <span className="flex items-center justify-center space-x-2">
              <SiLatex className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                LaTeX
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
                OpenMP
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
                Message Passing Interface
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
              <SiNvidia className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                CUDA
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
              <SiWireshark className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Wireshark
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
              <SiAnsible className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Ansible
              </p>
            </span>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default AdditionalTools;
