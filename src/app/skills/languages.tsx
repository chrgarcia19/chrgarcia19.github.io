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
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-10 max-md:gap-5 4k:gap-16 text-center">
          {/* TypeScript */}
          <SkillDisplay 
            skillName={"TypeScript"} 
            logo={<SiTypescript className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* JavaScript */}
          <SkillDisplay 
            skillName={"JavaScript"} 
            logo={<SiJavascript className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* HTML */}
          <SkillDisplay 
            skillName={"HTML5"} 
            logo={<SiHtml5 className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* CSS */}
          <SkillDisplay 
            skillName={"CSS3"} 
            logo={<SiCss3 className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Java */}
          <SkillDisplay 
            skillName={"Java"} 
            logo={<FaJava className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Python */}
          <SkillDisplay 
            skillName={"Python 3"} 
            logo={<SiPython className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* C */}
          <SkillDisplay 
            skillName={"C"} 
            logo={<C />} 
          />

          {/* C++ */}
          <SkillDisplay 
            skillName={"C++"} 
            logo={<SiCplusplus className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Go */}
          <SkillDisplay 
            skillName={"Go/Golang"} 
            logo={<SiGo className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Ruby */}
          <SkillDisplay 
            skillName={"Ruby"} 
            logo={<SiRuby className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Swift */}
          <SkillDisplay 
            skillName={"Swift"} 
            logo={<SiSwift className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* PHP */}
          <SkillDisplay 
            skillName={"PHP"} 
            logo={<SiPhp className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* Scala */}
          <SkillDisplay 
            skillName={"Scala"} 
            logo={<SiScala className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* R */}
          <SkillDisplay 
            skillName={"R"} 
            logo={<SiR className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Rust */}
          <SkillDisplay 
            skillName={"Rust"} 
            logo={<SiRust className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* Clojure */}
          <SkillDisplay 
            skillName={"Clojure"} 
            logo={<SiClojure className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Lisp */}
          <SkillDisplay 
            skillName={"Common Lisp"} 
            logo={<CommonLisp />} 
          />

          {/* Prolog */}
          <SkillDisplay 
            skillName={"Prolog"} 
            logo={<DiProlog className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
