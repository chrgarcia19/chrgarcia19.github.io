import C from "@/components/CLogo";
import CommonLisp from "@/components/LispLogo";
import SkillDisplay from "@/components/SkillDisplay";
import { DiProlog } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiGo,
  SiRuby,
  SiSwift,
  SiPhp,
  SiScala,
  SiR,
  SiRust,
  SiClojure,
} from "react-icons/si";

const ProgrammingLanguages = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">
          {/* TypeScript */}
          <SkillDisplay 
            skillName={"TypeScript"} 
            logo={<SiTypescript className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* JavaScript */}
          <SkillDisplay 
            skillName={"JavaScript"} 
            logo={<SiJavascript className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* HTML */}
          <SkillDisplay 
            skillName={"HTML5"} 
            logo={<SiHtml5 className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* CSS */}
          <SkillDisplay 
            skillName={"CSS3"} 
            logo={<SiCss3 className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Java */}
          <SkillDisplay 
            skillName={"Java"} 
            logo={<FaJava className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Python */}
          <SkillDisplay 
            skillName={"Python 3"} 
            logo={<SiPython className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* C */}
          <SkillDisplay 
            skillName={"C"} 
            logo={<C />} 
          />

          {/* C++ */}
          <SkillDisplay 
            skillName={"C++"} 
            logo={<SiCplusplus className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Go */}
          <SkillDisplay 
            skillName={"Go/Golang"} 
            logo={<SiGo className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Ruby */}
          <SkillDisplay 
            skillName={"Ruby"} 
            logo={<SiRuby className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Swift */}
          <SkillDisplay 
            skillName={"Swift"} 
            logo={<SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* PHP */}
          <SkillDisplay 
            skillName={"PHP"} 
            logo={<SiPhp className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* Scala */}
          <SkillDisplay 
            skillName={"Scala"} 
            logo={<SiScala className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* R */}
          <SkillDisplay 
            skillName={"R"} 
            logo={<SiR className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Rust */}
          <SkillDisplay 
            skillName={"Rust"} 
            logo={<SiRust className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* Clojure */}
          <SkillDisplay 
            skillName={"Clojure"} 
            logo={<SiClojure className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Lisp */}
          <SkillDisplay 
            skillName={"Common Lisp"} 
            logo={<CommonLisp />} 
          />

          {/* Prolog */}
          <SkillDisplay 
            skillName={"Prolog"} 
            logo={<DiProlog className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
