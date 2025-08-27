import SkillDisplay from "@/components/SkillDisplay";
import {
  SiApache,
  SiGit,
  SiGithub,
  SiGnubash,
  SiIntellijidea,
  SiJson,
  SiMongoose,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const DeveloperTools = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-10 max-md:gap-5 4k:gap-16 text-center">

          {/* Git */}
          <SkillDisplay 
            skillName={"Git"} 
            logo={<SiGit className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* GitHub */}
          <SkillDisplay 
            skillName={"GitHub"} 
            logo={<SiGithub className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* APIs */}
          <SkillDisplay 
            skillName={"Application Programming Interface (API)"} 
            logo={undefined} 
          />

          {/* Scripting */}
          <SkillDisplay 
            skillName={"Scripting (Shell & Bash)"} 
            logo={<SiGnubash className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* JSON */}
          <SkillDisplay 
            skillName={"JSON"} 
            logo={<SiJson className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Mongoose */}
          <SkillDisplay 
            skillName={"Mongoose"} 
            logo={<SiMongoose className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Apache2 */}
          <SkillDisplay 
            skillName={"Apache HTTP Server"} 
            logo={<SiApache className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* VS Code */}
          <SkillDisplay 
            skillName={"Visual Studio Code"} 
            logo={<VscVscode className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* IntelliJ */}
          <SkillDisplay 
            skillName={"IntelliJ"} 
            logo={<SiIntellijidea className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
        </div>
      </div>
    </>
  );
};

export default DeveloperTools;
