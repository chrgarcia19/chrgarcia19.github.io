import SkillDisplay from "@/components/SkillDisplay";
import { FaJava } from "react-icons/fa";
import {
  SiHugo,
  SiJunit5,
  SiNextdotjs,
  SiNextui,
  SiReact,
  SiRubyonrails,
  SiSwift,
  SiTailwindcss,
} from "react-icons/si";

const FrameworksLibraries = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">
          {/* Next.js */}
          <SkillDisplay 
            skillName={"Next.js"} 
            logo={<SiNextdotjs className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* React */}
          <SkillDisplay 
            skillName={"React"} 
            logo={<SiReact className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* TailwindCSS */}
          <SkillDisplay 
            skillName={"TailwindCSS"} 
            logo={<SiTailwindcss className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Ruby on Rails */}
          <SkillDisplay 
            skillName={"Ruby on Rails"} 
            logo={<SiRubyonrails className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* SwiftUI */}
          <SkillDisplay 
            skillName={"SwiftUI"} 
            logo={<SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* HeroUI */}
          <SkillDisplay 
            skillName={"HeroUI"} 
            logo={<SiNextui className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* JavaFX */}
          <SkillDisplay 
            skillName={"JavaFX"} 
            logo={<FaJava className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Java Swing */}
          <SkillDisplay 
            skillName={"Java Swing"} 
            logo={<FaJava className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* JUnit */}
          <SkillDisplay 
            skillName={"JUnit"} 
            logo={<SiJunit5 className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Hugo */}
          <SkillDisplay
            skillName={"Hugo"}
            logo={<SiHugo className="w-6 h-6 max-md:w-5 max-md:h-5" />}
          />
        </div>
      </div>
    </>
  );
};

export default FrameworksLibraries;
