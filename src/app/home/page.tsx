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
                            <p className="flex justify-center text-3xl max-sm:text-2xl font-semibold">Hi! I am</p>
                            <p className="flex font-extrabold text-7xl max-sm:text-3xl justify-center text-blue-950 dark:text-blue-300">Christian Garcia</p>
                            <br/>
                            <HomeText />
                        </div>
                    </div>
                    <div className="flex gap-8 max-sm:gap-2 max-sm:p-2 max-md:p-6">
                        <StyledButton href={"#projects"} text={"View Projects"} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={"py-3 max-sm:py-1"} textSize={"text-xl max-sm:text-sm"} padding={"px-6 max-sm:px-2 lg:px-4"}/>
                        <StyledButton href={"#about"} text={"More About Me"} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={"py-3 max-sm:py-1"} textSize={"text-xl max-sm:text-sm"} padding={"px-6 max-sm:px-2 lg:px-4"}/>
                        <DownloadButton text={"Download Résumé"} padding={"px-6 max-sm:px-2 lg:px-4 py-3 max-sm:py-1"} textSize={"text-xl max-sm:text-sm"} />
                    </div>
                    <div className="flex gap-4 pt-12">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaLinkedin className="w-10 h-10 max-sm:w-6 max-sm:h-6 max-md:w-7 max-md:h-7" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-sm:px-2 lg:px-4"} />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<SiIndeed className="w-10 h-10 max-sm:w-6 max-sm:h-6 max-md:w-7 max-md:h-7" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-sm:px-2 lg:px-4"} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaGithubSquare className="w-10 h-10 max-sm:w-6 max-sm:h-6 max-md:w-7 max-md:h-7" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-sm:px-2 lg:px-4"} />
                        <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<IoIosMail className="w-10 h-10 max-sm:w-6 max-sm:h-6 max-md:w-7 max-md:h-7" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-sm:px-2 lg:px-4"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;