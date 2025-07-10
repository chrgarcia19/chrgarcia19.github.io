import ItemBox from "@/components/ItemBox";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <>
            <div id="skills" className="flex flex-col pt-14 pl-14 pr-14 h-screen w-full">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">My Techical Skills</h2>
                <h3 className="flex justify-start text-2xl font-bold">Programming Languages</h3>
                <div className="flex justify-start p-4">
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-4"} other={"place-items-center space-y-2"}>
                        <SiTypescript size={30}/>
                        <p className="font-bold">TypeScript</p>
                    </ItemBox>
                </div>
            </div>
        </>
    )
}

export default Skills;