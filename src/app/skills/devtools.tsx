import ItemBox from "@/components/ItemBox";
import { SiApache, SiGit, SiGithub, SiGnubash, SiMongoose } from "react-icons/si";

const DeveloperTools = () => {
    return (
        <>
             <div className="flex flex-col">
                <div className="flex justify-start p-4 space-x-8">
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiGit size={30}/>
                        <p className="font-bold">Git</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiGithub size={30}/>
                        <p className="font-bold">GitHub</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2 text-center"}>
                        <SiGnubash size={30}/>
                        <p className="font-bold">Scripting (Shell & Bash)</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiMongoose size={30}/>
                        <p className="font-bold">Mongoose</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2 text-center"}>
                        <SiApache size={30}/>
                        <p className="font-bold">Apache HTTP Server</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
} 

export default DeveloperTools;