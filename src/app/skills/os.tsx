import SkillDisplay from "@/components/SkillDisplay";
import { FaWindows } from "react-icons/fa";
import { SiApple, SiFedora, SiManjaro, SiUbuntu } from "react-icons/si";

const OperatingSystems = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">
          {/* Manjaro */}
          <SkillDisplay 
            skillName={"Manjaro Linux"} 
            logo={<SiManjaro className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Ubuntu */}
          <SkillDisplay 
            skillName={"Ubuntu Linux"} 
            logo={<SiUbuntu className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Windows */}
          <SkillDisplay 
            skillName={"Microsoft Windows"} 
            logo={<FaWindows className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Fedora */}
          <SkillDisplay 
            skillName={"Fedora Linux"} 
            logo={<SiFedora className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* MacOS */}
          <SkillDisplay 
            skillName={"Apple macOS"} 
            logo={<SiApple className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
        </div>
      </div>
    </>
  );
};

export default OperatingSystems;
