import ProgrammingLanguages from "./languages";
import FrameworksLibraries from "./frameworkslibs";
import Databases from "./dbs";

const Skills = () => {
    return (
        <>
            <div id="skills" className="flex flex-col pt-14 pl-14 pr-14 h-screen w-full">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">My Techical Skills</h2>
                <h3 className="flex justify-start text-2xl font-bold">Programming Languages</h3>
                <ProgrammingLanguages />
                <br />
                <h3 className="flex justify-start text-2xl font-bold">Frameworks & Libraries</h3>
                <FrameworksLibraries />
                <h3 className="flex justify-start text-2xl font-bold">Databases</h3>
                <Databases />
            </div>
        </>
    )
}

export default Skills;