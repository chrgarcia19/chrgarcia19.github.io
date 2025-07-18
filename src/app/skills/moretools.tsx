import ItemBox from "@/components/ItemBox";
import { SiAnsible, SiLatex, SiNvidia, SiWireshark } from "react-icons/si";

const AdditionalTools = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-2 gap-5 text-center">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiLatex size={25} />                          
                            <p className="font-bold">LaTeX</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">                      
                            <p className="font-bold">OpenMP</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">                      
                            <p className="font-bold">Message Passing Interface</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiNvidia size={25}/>                  
                            <p className="font-bold">CUDA</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiWireshark size={25}/>                  
                            <p className="font-bold">Wireshark</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">    
                            <SiAnsible size={25}/>                  
                            <p className="font-bold">Ansible</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default AdditionalTools;