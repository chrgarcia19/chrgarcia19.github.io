import ItemBox from "@/components/ItemBox";
import { SiApache, SiGit, SiGithub, SiGnubash, SiIntellijidea, SiMongoose, SiVsco } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const DeveloperTools = () => {
    return (
        <>
             <div className="flex flex-col">
                <div className="flex justify-start p-2 gap-5 text-center">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGit size={25}/>
                            <p className="font-bold">Git</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGithub size={25}/>
                            <p className="font-bold">GitHub</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <p className="font-bold">Application Programming Interface (API)</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGnubash size={25}/>
                            <p className="font-bold">Scripting (Shell & Bash)</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiMongoose size={25}/>
                            <p className="font-bold">Mongoose</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiApache size={25}/>
                            <p className="font-bold">Apache HTTP Server</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <VscVscode size={25}/>
                            <p className="font-bold">Visual Studio Code</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiIntellijidea size={25}/>
                            <p className="font-bold">IntelliJ</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
} 

export default DeveloperTools;