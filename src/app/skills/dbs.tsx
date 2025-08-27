import ItemBox from "@/components/ItemBox";
import { SiMongodb, SiMysql, SiNeo4J, SiSqlite } from "react-icons/si";

const Databases = () => {
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
              <SiMongodb className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                MongoDB
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
              <SiMysql className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                MySQL
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
              <SiSqlite className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                SQLite
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
              <SiNeo4J className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />
              <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                Neo4J
              </p>
            </span>
          </ItemBox>
        </div>
      </div>
    </>
  );
};

export default Databases;
