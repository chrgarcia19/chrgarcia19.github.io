import ItemBox from "@/components/ItemBox";
import { FaJava } from "react-icons/fa";
import { SiJunit5, SiNextdotjs, SiNextui, SiReact, SiRubyonrails, SiSwift, SiTailwindcss } from "react-icons/si";

const FrameworksLibraries = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-8 max-md:pb-5 gap-5 max-md:gap-2 text-center">
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiNextdotjs className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Next.js</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiReact className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">React</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiTailwindcss className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">TailwindCSS</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiRubyonrails className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Ruby on Rails</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">SwiftUI</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiNextui className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">HeroUI</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaJava className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">JavaFX</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaJava className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">Java Swing</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400 dark:bg-cyan-800"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3 max-md:p-2"} other={"place-items-center dark:hover:text-black"} hoveredColor={"bg-cyan-500 dark:hover:bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiJunit5 className="w-6 h-6 max-md:w-5 max-md:h-5"/>
                            <p className="font-bold max-md:text-sm">JUnit</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default FrameworksLibraries;