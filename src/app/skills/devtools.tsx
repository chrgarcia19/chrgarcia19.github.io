import ItemBox from "@/components/ItemBox";
import { SiApache, SiGit, SiGithub, SiGnubash, SiIntellijidea, SiJson, SiMongoose, SiVsco } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const DeveloperTools = () => {
    return (
        <>
             <div className="flex flex-col">
                <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-8 max-md:pb-5 gap-5 max-md:gap-2 text-center">
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGit className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Git</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGithub className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">GitHub</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <p className="font-bold max-md:text-sm">Application Programming Interface (API)</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGnubash className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Scripting (Shell & Bash)</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiJson className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">JSON</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiMongoose className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Mongoose</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiApache className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Apache HTTP Server</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <VscVscode className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Visual Studio Code</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiIntellijidea className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">IntelliJ</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
} 

export default DeveloperTools;