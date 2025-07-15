import StyledButton from "@/components/StyledButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div id="contact" className="w-full">
                <nav className="flex flex-col w-full p-6 gap-4 items-center justify-center bg-sky-600 bottom-0">
                    <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={"Connect With Me Via Email!"} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={undefined} />
                    <span className="flex flex-row gap-4">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaLinkedin size={36}/>} />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<SiIndeed size={36}/>} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaGithubSquare size={36}/>} />
                    </span>
                    <span className="flex flex-col items-center">
                        <p>Christian Garcia ©2025</p>
                        <p>Created with Next.js, React, and TailwindCSS</p>
                        <p>Hosted on ...</p>
                    </span>
                </nav>
            </div>
        </>
    );

}

export default Contact;