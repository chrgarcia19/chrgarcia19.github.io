import Image from "next/image";
import StyledButton from "@/components/StyledButton";
import christianImage from "../../../assets/ChristianGarciaPhoto.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const Homepage = () => {
    return (
        <>
            <div className="flex pt-14 h-screen w-full">
                <div className="flex items-center justify-center w-1/4 pl-6">
                <div className="border border-black rounded-3xl overflow-hidden">
                    <Image 
                    src={christianImage} 
                    alt={"An Image of Christian"}
                    width={1800} 
                    />
                </div>
                </div>
                <div className="flex flex-col items-center justify-center w-3/4">
                <div className="flex justify-center items-center gap-x-16 p-10">
                    <div className="justify-center space-y-2">
                    <p className="flex font-extrabold text-7xl justify-center">Hi! I'm Christian Garcia</p>
                    <br/>
                    <p>An aspiring Software Engineer passionate about creating and contributing to software that makes a meaningful impact on users.</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <StyledButton href={"#projects"} text={"View Projects"} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined}/>
                    <StyledButton href={""} text={"Download Resume"} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined}/>
                </div>
                <div className="flex gap-4 pt-12">
                    <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaLinkedin size={36}/>} />
                    <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<SiIndeed size={36}/>} />
                    <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaGithubSquare size={36}/>} />
                    <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<IoIosMail size={36}/>} />
                </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;