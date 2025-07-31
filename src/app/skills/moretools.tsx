import ItemBox from "@/components/ItemBox";
import { SiAnsible, SiLatex, SiNvidia, SiWireshark } from "react-icons/si";

const AdditionalTools = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-8 max-md:pb-5 gap-5 max-md:gap-2 text-center">
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiLatex className="w-6 h-6 max-md:w-5 max-md:h-5" />                          
                            <p className="font-bold max-md:text-sm">LaTeX</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">                      
                            <p className="font-bold max-md:text-sm">OpenMP</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">                      
                            <p className="font-bold max-md:text-sm">Message Passing Interface</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiNvidia className="w-6 h-6 max-md:w-5 max-md:h-5"/>                  
                            <p className="font-bold max-md:text-sm">CUDA</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiWireshark className="w-6 h-6 max-md:w-5 max-md:h-5"/>                  
                            <p className="font-bold max-md:text-sm">Wireshark</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiAnsible className="w-6 h-6 max-md:w-5 max-md:h-5"/>                  
                            <p className="font-bold max-md:text-sm">Ansible</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default AdditionalTools;