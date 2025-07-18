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
            <div className="flex justify-center items-center pt-14 h-screen w-full bg-zinc-300">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center gap-x-16 p-10">
                        <div className="justify-center space-y-2">
                            <p className="flex justify-center text-3xl font-semibold">Hi! I am</p>
                            <p className="flex font-extrabold text-7xl justify-center text-blue-950">Christian Garcia</p>
                            <br/>
                            <HomeText />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <StyledButton href={"#projects"} text={"View Projects"} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={undefined} other={"py-3"}/>
                        <StyledButton href={"#about"} text={"More About Me"} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={undefined} other={"py-3"}/>
                        <DownloadButton text={"Download Résumé"} />
                    </div>
                    <div className="flex gap-4 pt-12">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<FaLinkedin size={32} />} other={undefined} />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<SiIndeed size={32} />} other={undefined} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<FaGithubSquare size={32} />} other={undefined} />
                        <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={""} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<IoIosMail size={32} />} other={undefined} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;