import ProgrammingLanguages from "./languages";
import FrameworksLibraries from "./frameworkslibs";
import Databases from "./dbs";
import DeveloperTools from "./devtools";
import OperatingSystems from "./os";
import AdditionalTools from "./moretools";
import Concepts from "./concepts";
import SkillSection from "@/components/SkillSection";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex flex-col pt-10 pl-14 pr-14 pb-10 max-md:pl-4 max-md:pr-4 w-full bg-skills"
      >
        <h2 className="flex justify-center items-center text-center font-bold underline text-5xl max-sm:text-3xl p-10 pb-16 text-heading drop-shadow-2xl">
          My Technical Skills
        </h2>

        {/* Programming Languages */}
        <SkillSection 
          sectionTitle={"Programming Languages"}
          skills={<ProgrammingLanguages />} 
          gradientColors={"from-cyan-500 to-blue-500"}        
        />

        {/* Frameworks & Libraries */}
        <SkillSection 
          sectionTitle={"Frameworks & Libraries"} 
          skills={<FrameworksLibraries />} 
          gradientColors={"from-purple-500 to-pink-500"} 
        />

        {/* Databases */}
        <SkillSection 
          sectionTitle={"Databases"} 
          skills={<Databases />} 
          gradientColors={"from-green-500 to-emerald-400"} 
        />

        {/* Developer Tools */}
        <SkillSection 
          sectionTitle={"Developer Tools"} 
          skills={<DeveloperTools />} 
          gradientColors={"from-orange-400 to-red-500"} 
        />

        {/* Operating Systems */}
        <SkillSection 
          sectionTitle={"Operating Systems"} 
          skills={<OperatingSystems />} 
          gradientColors={"from-yellow-400 to-amber-500"} 
        />

        {/* Specialized Technologies */}
        <SkillSection 
          sectionTitle={"Specialized Technologies"} 
          skills={<AdditionalTools />} 
          gradientColors={"from-pink-400 to-rose-500"} 
        />

        {/* Concepts */}
        <SkillSection 
          sectionTitle={"Concepts"} 
          skills={<Concepts />} 
          gradientColors={"from-sky-400 to-indigo-500"} 
        />
      </section>
    </>
  );
};

export default Skills;
