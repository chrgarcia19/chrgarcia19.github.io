/* eslint-disable react/no-unescaped-entities */
import StyledButton from "@/components/StyledButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import DownloadButton from "@/components/DownloadButton";
import HomeText from "@/components/HomeText";

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center items-center max-sm:pt-0 w-full h-screen bg-zinc-300 dark:bg-zinc-800">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center gap-x-16 p-10 max-sm:p-6">
                        <div className="justify-center space-y-2">
                            <p className="flex justify-center text-3xl max-sm:text-2xl 3xl:text-5xl 4k:text-6xl font-semibold">Hi! I am</p>
                            <p className="flex font-extrabold text-7xl max-sm:text-3xl 3xl:text-8xl 4k:text-9xl justify-center text-blue-950 dark:text-blue-300">Christian Garcia</p>
                            <br/>
                            <HomeText />
                        </div>
                    </div>
                    <div className="flex place-content-center gap-8 max-sm:gap-2 4k:gap-10 max-sm:p-4 max-md:p-6 4k:p-8">
                        <StyledButton href={"#projects"} text={"View Projects"} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} textSize={"text-xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"} padding={"max-sm:px-2 md:px-3 lg:px-4 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"} label={"View Projects Section"} title={"View Projects Section"}/>
                        <StyledButton href={"#about"} text={"More About Me"} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} textSize={"text-xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"} padding={"max-sm:px-2 md:px-3 lg:px-4 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"} label={"Learn More About Christian"} title={"Learn More About Christian"}/>
                        <DownloadButton text={"View Résumé"} padding={"max-sm:px-2 md:px-3 lg:px-4 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"} textSize={"text-xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"} view={true} />
                    </div>
                    <div className="flex gap-4 pt-12">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaLinkedin className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={""} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's LinkedIn"} title={"Christian's LinkedIn"} />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<SiIndeed className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={""} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's Indeed"} title={"Christian's Indeed"} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaGithubSquare className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={""} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's GitHub"} title={"Christian's GitHub"} />
                        <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<IoIosMail className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={""} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Email Christian"} title={"Email Christian"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;