/* eslint-disable react/no-unescaped-entities */
import ItemBox from "@/components/ItemBox";
import christianImage from "@/../public/ChristianGarciaPhoto.jpg";
import Image from "next/image";

const AboutMe = () => {
    return (
        <>
            <div id="about" className="p-5 pt-14 w-full h-screen bg-zinc-300">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">About Me</h2>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-normal w-1/2 p-10">
                        <div className="border-2 border-slate-400 rounded-3xl overflow-hidden">
                            <Image 
                                src={christianImage} 
                                alt={"An Image of Christian"}
                                width={350} 
                                />
                        </div>
                        <div className="justify-center p-6">
                            <p className="flex text-xl font-semibold justify-center">Hello! I'm Christian,</p>
                            <br/>
                            <p className="pl-4 pr-4 text-center">An aspiring Software Engineer constructing reliable yet impactful software solutions to provide a functional user experience. With a Bachelor’s of Science in Computer Science, I am enthusiastic about Software Engineering and Full Stack Development. My journey into the Computer Science field initially centered around curiosity. That curiosity has blossomed into a profound passion to learn, design, and collaborate on software that will make a difference. </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-center justify-center gap-y-12">
                        <div className="flex text-xl font-semibold justify-center">My Academic & Professional Journey</div>
                        <ItemBox color={"bg-cyan-600"} width={"w-4/6"} boxType={"rounded-lg"} padding={"p-4"} other={"text-center"} hoveredColor={"shadow-slate-500"}>
                            <p className="font-bold text-2xl">Valparaiso University</p>
                            <p className="italic">Bachelor of Science in Computer Science</p>
                            <p className="text-sm">August 2020 - May 2024</p>
                            <p className="text-sm">Overall GPA: 3.854</p>
                        </ItemBox>
                        <ItemBox color={"bg-cyan-600"} width={"w-4/6"} boxType={"rounded-lg"} padding={"p-4"} other={"text-center"} hoveredColor={"shadow-slate-500"}>
                            <p className="font-bold text-2xl">Association for Computing Machinery (ACM)</p>
                            <p className="italic">President (August 2023 - May 2024), Webmaster (March 2023 - May 2024)</p>
                            <p className="text-sm">Managed ACM’s website and coordinated diverse events, including professional development workshops and campus activities. Initiated and led a speaker series exploring computing’s role across disciplines.</p>
                        </ItemBox>
                        <ItemBox color={"bg-cyan-600"} width={"w-4/6"} boxType={"rounded-lg"} padding={"p-4"} other={"text-center"} hoveredColor={"shadow-slate-500"}>
                            <p className="font-bold text-2xl">New Prairie High School</p>
                            <p className="italic">High School Diploma with Honors</p>
                            <p className="text-sm">August 2016 - May 2020</p>
                            <p className="text-sm">Overall GPA: 3.960</p>
                        </ItemBox>
                    </div>               
                </div>
            </div>
        </>
    )
}

export default AboutMe;