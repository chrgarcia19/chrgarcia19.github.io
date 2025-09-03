import SkillDisplay from "@/components/SkillDisplay";

const Concepts = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">

          {/* Software Development Life Cycle (SDLC) */}
          <SkillDisplay 
            skillName={"Software Development Life Cycle (SDLC)"} 
            logo={undefined} 
          />

          {/* Agile Methodologies */}
          <SkillDisplay 
            skillName={"Agile Methodologies"} 
            logo={undefined} 
          />
          
          {/* Model-View-Controller (MVC) */}
          <SkillDisplay 
            skillName={"Model-View-Controller (MVC)"} 
            logo={undefined} 
          />
          
          {/* Model-View-ViewModel (MVVM) */}
          <SkillDisplay 
            skillName={"Model-View-ViewModel (MVVM)"} 
            logo={undefined} 
          />

          {/* Unified Modeling Language (UML) */}
          <SkillDisplay 
            skillName={"Unified Modeling Language (UML)"} 
            logo={undefined} 
          />

          {/* TCP/IP */}
          <SkillDisplay 
            skillName={"TCP/IP"} 
            logo={undefined} 
          />
        </div>
      </div>
    </>
  );
};

export default Concepts;
