import ItemBox from "@/components/ItemBox";
import Image from "next/image";
import { FaJava } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython, SiCplusplus, SiGo, SiRuby } from "react-icons/si";
import CLogo from "../../../assets/CProgrammingLanguage.svg";
import ProgrammingLanguages from "./languages";

const Skills = () => {
    return (
        <>
            <div id="skills" className="flex flex-col pt-14 pl-14 pr-14 h-screen w-full">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">My Techical Skills</h2>
                <h3 className="flex justify-start text-2xl font-bold">Programming Languages</h3>
                <ProgrammingLanguages />
            </div>
        </>
    )
}

export default Skills;