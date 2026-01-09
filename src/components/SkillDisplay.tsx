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
                color={"bg-skill-box"}
                width={"w-fit h-fit"}
                boxType={"rounded-lg"}
                padding={"p-3 max-md:p-2"}
                other={"place-items-center duration-150 transition-all"}
                hoveredColor={"text-skill-box"}
            >
                <span className="flex items-center justify-center space-x-2">
                    {props.logo}
                {props.logo ? (<div className="w-0.5 h-6 bg-separator opacity-75 mx-2" />) : (<></>)}
                <p className="font-bold max-md:text-sm">
                    {props.skillName}
                </p>
                </span>
            </ItemBox>
        </>
    );
};

export default SkillDisplay;