import ItemBox from "@/components/ItemBox";
import { SiMongodb, SiMysql, SiNeo4J, SiSqlite } from "react-icons/si";

const Databases = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-4 space-x-8">
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiMongodb size={30}/>
                        <p className="font-bold">MongoDB</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiMysql size={30}/>
                        <p className="font-bold">MySQL</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiSqlite size={30}/>
                        <p className="font-bold">SQLite</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-1/12"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center space-y-2"}>
                        <SiNeo4J size={30}/>
                        <p className="font-bold">Neo4J</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default Databases;