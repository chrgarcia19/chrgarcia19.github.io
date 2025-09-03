import SkillDisplay from "@/components/SkillDisplay";
import { SiAnsible, SiLatex, SiNvidia, SiWireshark } from "react-icons/si";

const AdditionalTools = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">
          
          {/* LaTeX */}
          <SkillDisplay 
            skillName={"LaTeX"} 
            logo={<SiLatex className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
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
            logo={<SiNvidia className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Wireshark */}
          <SkillDisplay 
            skillName={"Wireshark"} 
            logo={<SiWireshark className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* Ansible */}
          <SkillDisplay 
            skillName={"Ansible"} 
            logo={<SiAnsible className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalTools;
