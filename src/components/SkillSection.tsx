import { ReactElement } from "react";

type Props = {
    sectionTitle: string,
    skills: ReactElement,
    gradientColors: string,
};

const SkillSection = (props: Props) => {
    return(
        <>
            <div className="flex mb-8">
                <div className={`w-[6px] rounded-l-2xl bg-gradient-to-b ${props.gradientColors}`} />
                <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 shadow-md p-6">
                    <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
                        {props.sectionTitle}
                    </h3>
                    {props.skills}
                </div>
                <div className={`w-[6px] rounded-r-2xl bg-gradient-to-t ${props.gradientColors}`} />
            </div>
        </>
    );
}

export default SkillSection;