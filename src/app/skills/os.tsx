import ItemBox from "@/components/ItemBox";
import { FaWindows } from "react-icons/fa";
import { SiApple, SiFedora, SiManjaro, SiUbuntu } from "react-icons/si";

const OperatingSystems = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-8 max-md:pb-5 gap-5 max-md:gap-2 text-center">
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiManjaro className="w-6 h-6 max-md:w-5 max-md:h-5" />                          
                            <p className="font-bold max-md:text-sm">Manjaro Linux</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiUbuntu className="w-6 h-6 max-md:w-5 max-md:h-5" />
                            <p className="font-bold max-md:text-sm">Ubuntu Linux</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaWindows className="w-6 h-6 max-md:w-5 max-md:h-5" />
                            <p className="font-bold max-md:text-sm">Windows</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiFedora className="w-6 h-6 max-md:w-5 max-md:h-5" />
                            <p className="font-bold max-md:text-sm">Fedora Linux</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiApple className="w-6 h-6 max-md:w-5 max-md:h-5" />
                            <p className="font-bold max-md:text-sm">macOS</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default OperatingSystems;