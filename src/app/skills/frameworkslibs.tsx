import ItemBox from "@/components/ItemBox";
import { FaJava } from "react-icons/fa";
import { SiJunit5, SiNextdotjs, SiNextui, SiReact, SiRubyonrails, SiSwift } from "react-icons/si";

const FrameworksLibraries = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-2 space-x-6">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiNextdotjs size={25}/>
                            <p className="font-bold">Next.js</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiReact size={25}/>
                            <p className="font-bold">React</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiRubyonrails size={25}/>
                            <p className="font-bold">Ruby on Rails</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiSwift size={25}/>
                            <p className="font-bold">SwiftUI</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiNextui size={25}/>
                            <p className="font-bold">HeroUI</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaJava size={25}/>
                            <p className="font-bold">JavaFX</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <FaJava size={25}/>
                            <p className="font-bold">Java Swing</p>
                        </span>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"} hoveredColor={"bg-cyan-500"}>
                        <span className="flex space-x-2">
                            <SiJunit5 size={25}/>
                            <p className="font-bold">JUnit</p>
                        </span>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default FrameworksLibraries;