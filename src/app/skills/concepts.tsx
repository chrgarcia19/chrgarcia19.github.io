import ItemBox from "@/components/ItemBox";

const Concepts = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-5 gap-y-7 4k:gap-8 max-md:gap-4 text-center">
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              Software Development Life Cycle (SDLC)
            </p>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              Agile Methodologies
            </p>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              Model-View-Controller (MVC)
            </p>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              Model-View-ViewModel (MVVM)
            </p>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              Unified Modeling Language (UML)
            </p>
          </ItemBox>
          <ItemBox
            color={"bg-cyan-400 dark:bg-cyan-800"}
            width={"w-fit"}
            boxType={"rounded-lg"}
            padding={"p-3 4k:p-4"}
            other={"place-items-center dark:hover:text-black"}
            hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}
          >
            <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
              TCP/IP
            </p>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default Concepts;
