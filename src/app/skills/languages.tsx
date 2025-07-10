import ItemBox from "@/components/ItemBox";
import { FaJava } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython, SiCplusplus, SiGo, SiRuby, SiSwift, SiPhp, SiScala, SiR, SiRust, SiClojure } from "react-icons/si";

const ProgrammingLanguages = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-4 space-x-8">
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiTypescript size={30}/>
                        <p className="font-bold">TypeScript</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiJavascript size={30}/>
                        <p className="font-bold">JavaScript</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiHtml5 size={30}/>
                        <p className="font-bold">HTML</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiHtml5 size={30}/>
                        <p className="font-bold">HTML5</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiCss3 size={30}/>
                        <p className="font-bold">CSS3</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <FaJava size={30}/>
                        <p className="font-bold">Java</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiPython size={30}/>
                        <p className="font-bold">Python 3</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <p className="font-bold">C</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiCplusplus size={30}/>
                        <p className="font-bold">C++</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiGo size={30}/>
                        <p className="font-bold">Go/Golang</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiRuby size={30}/>
                        <p className="font-bold">Ruby</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiSwift size={30}/>
                        <p className="font-bold">Swift</p>
                    </ItemBox>
                </div>
                <div className="flex justify-start p-4 space-x-8">
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiPhp size={30}/>
                        <p className="font-bold">PHP</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiScala size={30}/>
                        <p className="font-bold">Scala</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiR size={30}/>
                        <p className="font-bold">R</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiRust size={30}/>
                        <p className="font-bold">Rust</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiClojure size={30}/>
                        <p className="font-bold">Clojure</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <p className="font-bold">Lisp</p>
                    </ItemBox>
                </div>
            </div>
            
        </>
    );
}

export default ProgrammingLanguages;