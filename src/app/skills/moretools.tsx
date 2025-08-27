import SkillDisplay from "@/components/SkillDisplay";
import { SiAnsible, SiLatex, SiNvidia, SiWireshark } from "react-icons/si";

const AdditionalTools = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 4k:pt-6 pb-16 max-md:pb-10 gap-10 max-md:gap-5 4k:gap-16 text-center">
          
          {/* LaTeX */}
          <SkillDisplay 
            skillName={"LaTeX"} 
            logo={<SiLatex className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
          
          {/* OpenMP */}
          <SkillDisplay 
            skillName={"OpenMP"} 
            logo={undefined} 
          />

          {/* Message Passing Interface */}
          <SkillDisplay 
            skillName={"Message Passing Interfact (MPI)"} 
            logo={undefined} 
          />

          {/* CUDA */}
          <SkillDisplay 
            skillName={"CUDA"} 
            logo={<SiNvidia className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Wireshark */}
          <SkillDisplay 
            skillName={"Wireshark"} 
            logo={<SiWireshark className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />

          {/* Ansible */}
          <SkillDisplay 
            skillName={"Ansible"} 
            logo={<SiAnsible className="w-6 h-6 max-md:w-5 max-md:h-5 3xl:w-8 3xl:h-8 4k:w-12 4k:h-12" />} 
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalTools;
