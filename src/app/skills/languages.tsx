import C from "@/components/CLogo";
import ItemBox from "@/components/ItemBox";
import CommonLisp from "@/components/LispLogo";
import { DiProlog } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython, SiCplusplus, SiGo, SiRuby, SiSwift, SiPhp, SiScala, SiR, SiRust, SiClojure } from "react-icons/si";

const ProgrammingLanguages = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-start p-2 gap-5 text-center">
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiTypescript className="" size={25}/>
                            <p className="font-bold">TypeScript</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiJavascript size={25}/>
                            <p className="font-bold">JavaScript</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiHtml5 size={25}/>
                            <p className="font-bold">HTML5</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiCss3 size={25}/>
                            <p className="font-bold">CSS3</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaJava size={25}/>
                            <p className="font-bold">Java</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiPython size={25}/>
                            <p className="font-bold">Python 3</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <C size={"25"} />
                            <p className="font-bold">C</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiCplusplus size={25}/>
                            <p className="font-bold">C++</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiGo size={25}/>
                            <p className="font-bold">Go/Golang</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiRuby size={25}/>
                            <p className="font-bold">Ruby</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiSwift size={25}/>
                            <p className="font-bold">Swift</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiPhp size={25}/>
                            <p className="font-bold">PHP</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiScala size={25}/>
                            <p className="font-bold">Scala</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiR size={25}/>
                            <p className="font-bold">R</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiRust size={25}/>
                            <p className="font-bold">Rust</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiClojure size={25}/>
                            <p className="font-bold">Clojure</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <CommonLisp size={"25"} />
                            <p className="font-bold">Lisp</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <DiProlog size={25}/>
                            <p className="font-bold">Prolog</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
            
        </>
    );
}

export default ProgrammingLanguages;