import ProgrammingLanguages from "./languages";
import FrameworksLibraries from "./frameworkslibs";
import Databases from "./dbs";
import DeveloperTools from "./devtools";
import OperatingSystems from "./os";
import AdditionalTools from "./moretools";
import Concepts from "./concepts";

const Skills = () => {
    return (
        <>
            <div id="skills" className="flex flex-col pt-10 pl-14 pr-14 h-screen w-full bg-zinc-300">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">My Techical Skills</h2>
                <h3 className="flex justify-start text-2xl font-bold">Programming Languages</h3>
                <ProgrammingLanguages />
                <h3 className="flex justify-start text-2xl font-bold">Frameworks & Libraries</h3>
                <FrameworksLibraries />
                <h3 className="flex justify-start text-2xl font-bold">Databases</h3>
                <Databases />
                <h3 className="flex justify-start text-2xl font-bold">Developer Tools</h3>
                <DeveloperTools />
                <h3 className="flex justify-start text-2xl font-bold">Operating Systems</h3>
                <OperatingSystems />
                <h3 className="flex justify-start text-2xl font-bold">Additional Tools</h3>
                <AdditionalTools />
                <h3 className="flex justify-start text-2xl font-bold">Concepts</h3>
                <Concepts />
            </div>
        </>
    )
}

export default Skills;