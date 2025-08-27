import { ReactElement } from "react";
import ItemBox from "./ItemBox";

type Props = {
    skillName: string,
    logo: ReactElement | undefined,
};

const SkillDisplay = (props: Props) => {
    return (
        <>
            <ItemBox
                color={"bg-cyan-400 dark:bg-cyan-800"}
                width={"w-fit h-fit"}
                boxType={"rounded-lg"}
                padding={"p-3 max-md:p-2 4k:p-4"}
                other={"place-items-center duration-150 transition-all"}
                hoveredColor={"text-white dark:text-black bg-cyan-500 dark:hover:bg-cyan-500"}
            >
                <span className="flex items-center justify-center space-x-2">
                    {props.logo}
                {props.logo ? (<div className="w-0.5 h-6 bg-slate-200 dark:bg-slate-900 opacity-75 mx-2" />) : (<></>)}
                <p className="font-bold max-md:text-sm 3xl:text-xl 4k:text-3xl">
                    {props.skillName}
                </p>
                </span>
            </ItemBox>
        </>
    );
};

export default SkillDisplay;