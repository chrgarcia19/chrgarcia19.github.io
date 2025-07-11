import ItemBox from "@/components/ItemBox";
import { FaJava } from "react-icons/fa";
import { SiJunit5, SiNextdotjs, SiNextui, SiReact, SiRubyonrails, SiSwift } from "react-icons/si";

const FrameworksLibraries = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-4 space-x-6">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiNextdotjs size={25}/>
                        <p className="font-bold">Next.js</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiReact size={25}/>
                        <p className="font-bold">React</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiRubyonrails size={25}/>
                        <p className="font-bold">Ruby on Rails</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiSwift size={25}/>
                        <p className="font-bold">SwiftUI</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiNextui size={25}/>
                        <p className="font-bold">HeroUI</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <FaJava size={25}/>
                        <p className="font-bold">JavaFX</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <FaJava size={25}/>
                        <p className="font-bold">Java Swing</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiJunit5 size={25}/>
                        <p className="font-bold">JUnit</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default FrameworksLibraries;