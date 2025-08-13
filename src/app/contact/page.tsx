import StyledButton from "@/components/StyledButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div id="contact" className="flex flex-col pt-10 w-full bg-zinc-300 dark:bg-zinc-800">
                <div className="flex flex-col items-center justify-center bg-blue-950 dark:bg-blue-950 gap-6 p-10 max-md:p-2 max-md:pt-8">
                    <h3 className="font-bold text-5xl max-sm:text-3xl 3xl:text-6xl 4k:text-8xl p-10 text-zinc-300 dark:text-white text-center">Get In Touch</h3>
                    <p className="text-2xl max-md:text-base 3xl:text-xl 4k:text-3xl text-center w-1/2 max-md:w-full p-5 max-md:p-2 text-white">I am actively seeking new opportunities in software engineering. If you have a role or project that aligns with my skills and experience, I would welcome the chance to connect. Please feel free to reach out!</p>
                    <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={"Connect With Christian"} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} textSize={"text-lg max-sm:text-base md:text-2xl max-lg:text-3xl 3xl:text-3xl 4k:text-5xl"} padding={"px-6 max-sm:px-3 md:px-3 lg:px-4 py-6 max-sm:py-4 md:py-4 3xl:px-6 4k:px-10 4k:py-5"} label={"Send an Email to Christian"} title={"Email Christian"} />
                    <span className="flex flex-row gap-4 p-4">
                        <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-cyan-500  dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaLinkedin className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={""} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's LinkedIn"} title={"Christian's LinkedIn"}  />
                        <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-cyan-500  dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<SiIndeed className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's Indeed"} title={"Christian's Indeed"} />
                        <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={<FaGithubSquare className="w-10 h-10 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />} other={"py-1"} textSize={"text-lg max-sm:text-sm max-lg:text-3xl"} padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"} label={"Go to Christian's GitHub"} title={"Christian's GitHub"} />
                    </span>
                </div>
                <nav className="flex flex-col w-full p-2 items-center justify-center bg-cyan-500 dark:bg-cyan-700 bottom-0">
                    <span className="flex flex-col items-center text-center">
                        <p className="text-white max-md:text-sm 3xl:text-lg 4k:text-2xl">Christian Garcia ©2025</p>
                        <p className="text-white text-sm max-md:text-xs 3xl:text-lg 4k:text-2xl">Created with Next.js, TypeScript, React, and TailwindCSS</p>
                        <p className="text-white text-sm max-md:text-xs 3xl:text-lg 4k:text-2xl">Hosted on GitHub Pages</p>
                    </span>
                </nav>
            </div>
        </>
    );

}

export default Contact;