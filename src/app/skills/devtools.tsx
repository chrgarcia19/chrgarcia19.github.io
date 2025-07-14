import ItemBox from "@/components/ItemBox";
import { SiApache, SiGit, SiGithub, SiGnubash, SiIntellijidea, SiMongoose, SiVsco } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const DeveloperTools = () => {
    return (
        <>
             <div className="flex flex-col">
                <div className="flex justify-start p-2 space-x-6 text-center">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiGit size={25}/>
                        <p className="font-bold">Git</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiGithub size={25}/>
                        <p className="font-bold">GitHub</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiGnubash size={25}/>
                        <p className="font-bold">Scripting (Shell & Bash)</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiMongoose size={25}/>
                        <p className="font-bold">Mongoose</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiApache size={25}/>
                        <p className="font-bold">Apache HTTP Server</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <VscVscode size={25}/>
                        <p className="font-bold">Visual Studio Code</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiIntellijidea size={25}/>
                        <p className="font-bold">IntelliJ</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
} 

export default DeveloperTools;