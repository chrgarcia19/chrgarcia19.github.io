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
                <div className={`w-1.5 rounded-l-2xl bg-linear-to-b ${props.gradientColors}`} />
                <div className="flex-1 bg-skill-category shadow-md p-6">
                    <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl font-bold italic underline p-2">
                        {props.sectionTitle}
                    </h3>
                    {props.skills}
                </div>
                <div className={`w-1.5 rounded-r-2xl bg-linear-to-t ${props.gradientColors}`} />
            </div>
        </>
    );
}

export default SkillSection;