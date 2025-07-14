import ItemBox from "@/components/ItemBox";
import { SiMongodb, SiMysql, SiNeo4J, SiSqlite } from "react-icons/si";

const Databases = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-2 space-x-6">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiMongodb size={25}/>
                        <p className="font-bold">MongoDB</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiMysql size={25}/>
                        <p className="font-bold">MySQL</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiSqlite size={25}/>
                        <p className="font-bold">SQLite</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>
                        <SiNeo4J size={25}/>
                        <p className="font-bold">Neo4J</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default Databases;