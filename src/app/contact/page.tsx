import StyledButton from "@/components/StyledButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div id="contact" className="flex flex-col pt-10 w-full bg-zinc-300">
                <div className="flex flex-col items-center justify-center bg-blue-950 gap-6 p-10">
                    <h3 className="font-bold text-5xl p-10 text-zinc-300">Get In Touch</h3>
                    <p className="text-2xl text-center w-1/2 p-5 text-white">I am actively seeking new opportunities in software engineering. If you have a role or project that aligns with my skills and experience, I would welcome the chance to connect. Please feel free to reach out!</p>
                    <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={"Connect With Christian"} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={undefined} other={"py-6 text-xl"} />
                    <span className="flex flex-row gap-4 p-4">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={undefined} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<FaLinkedin size={32} />} other={undefined} />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={undefined} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<SiIndeed size={32} />} other={undefined} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={undefined} color={"bg-cyan-500"} hoveredColor={"bg-cyan-600"} icon={<FaGithubSquare size={32} />} other={undefined} />
                    </span>
                </div>
                <nav className="flex flex-col w-full p-2 items-center justify-center bg-cyan-500 bottom-0">
                    <span className="flex flex-col items-center">
                        <p className="text-white">Christian Garcia ©2025</p>
                        <p className="text-white">Created with Next.js, TypeScript, React, and TailwindCSS</p>
                        <p className="text-white">Hosted on ...</p>
                    </span>
                </nav>
            </div>
        </>
    );

}

export default Contact;