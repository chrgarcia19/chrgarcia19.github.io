import SkillDisplay from "@/components/SkillDisplay";
import { SiMongodb, SiMysql, SiNeo4J, SiSqlite } from "react-icons/si";

const Databases = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start max-md:justify-center p-2 pt-2 pb-16 max-md:pb-10 gap-10 max-md:gap-5 text-center">
          {/* MongoDB */}
          <SkillDisplay 
            skillName={"MongoDB"} 
            logo={<SiMongodb className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />

          {/* MySQL */}
          <SkillDisplay 
            skillName={"MySQL"} 
            logo={<SiMysql className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* SQLite */}
          <SkillDisplay 
            skillName={"SQLite"} 
            logo={<SiSqlite className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
          
          {/* Neo4J */}
          <SkillDisplay 
            skillName={"Neo4J"} 
            logo={<SiNeo4J className="w-6 h-6 max-md:w-5 max-md:h-5" />} 
          />
        </div>
      </div>
    </>
  );
};

export default Databases;
