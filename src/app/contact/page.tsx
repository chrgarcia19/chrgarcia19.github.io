import ContactForm from "@/components/ContactForm";
import StyledButton from "@/components/StyledButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col w-full bg-blue-950"
      >
        <div className="flex flex-col items-center justify-center gap-6 max-lg:gap-2 p-12 max-md:p-2 max-md:pt-8">
          <h3 className="flex justify-center items-center font-bold underline text-5xl max-sm:text-3xl 3xl:text-6xl 4k:text-8xl p-10 text-blue-300 drop-shadow-2xl">
            Get In Touch
          </h3>

          {/* For Desktop*/}
          <div className="max-lg:hidden flex max-lg:flex-col items-center justify-center max-xl:w-full xl:w-3/4">
            <div className="flex justify-center items-center w-1/2 max-lg:w-full">
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 max-lg:w-full gap-y-16 max-lg:gap-y-6 max-lg:pt-6">
              <h4 className="flex justify-center items-center text-center text-3xl font-semibold text-white underline px-4 pt-2">Let&apos;s Connect!</h4>
              <div className="flex justify-center space-y-4 leading-relaxed text-center lg:hover:font-semibold lg:hover:text-slate-800 lg:dark:text-slate-200 transition-all duration-150">
                <p className="text-2xl max-md:text-base 3xl:text-xl 4k:text-3xl text-center w-3/4 max-md:w-full max-md:p-2 text-white">
                  I am actively seeking new opportunities in Software Engineering or Full Stack Development. If
                  you have a role or project that aligns with my skills and
                  experience, I would welcome the chance to connect. Please feel free
                  to reach out!
                </p>
              </div>
              <div className="flex flex-row justify-center gap-10 p-4">
                <StyledButton
                  href={"https://www.linkedin.com/in/chrgarcia19/"}
                  text={"LinkedIn"}
                  color={"bg-cyan-500  dark:bg-cyan-700"}
                  hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                  icon={<FaLinkedin className="w-8 h-8 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />}
                  other={""}
                  textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                  padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-2"}
                  label={"Go to Christian's LinkedIn"}
                  title={"Christian's LinkedIn"}
                  textColor={"text-white"} 
                  animation={"transition-all duration-300 ease-in-out"}              
                  />
                <StyledButton
                  href={"https://profile.indeed.com/p/christiang-mg6ntmr"}
                  text={"Indeed"}
                  color={"bg-cyan-500  dark:bg-cyan-700"}
                  hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                  icon={<SiIndeed className="w-8 h-8 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />}
                  other={"py-1"}
                  textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                  padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-2"}
                  label={"Go to Christian's Indeed"}
                  title={"Christian's Indeed"}
                  textColor={"text-white"} 
                  animation={"transition-all duration-300 ease-in-out"}              
                  />
                <StyledButton
                  href={"https://github.com/chrgarcia19"}
                  text={"GitHub"}
                  color={"bg-cyan-500 dark:bg-cyan-700"}
                  hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                  icon={<FaGithubSquare className="w-8 h-8 max-md:w-7 max-md:h-7 3xl:w-12 3xl:h-12 4k:w-16 4k:h-16" />}
                  other={"py-1"}
                  textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                  padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-2"}
                  label={"Go to Christian's GitHub"}
                  title={"Christian's GitHub"}
                  textColor={"text-white"} 
                  animation={"transition-all duration-300 ease-in-out"}              
                  />
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className="lg:hidden flex flex-col items-center justify-center gap-10">
            <div className="flex justify-center space-y-1 leading-relaxed text-center lg:hover:font-semibold lg:hover:text-slate-800 lg:dark:text-slate-200 transition-all duration-150">
              <p className="text-center w-3/4 max-md:w-full max-md:p-2 text-white">
                I am actively seeking new opportunities in Software Engineering or Full Stack Development. If
                you have a role or project that aligns with my skills and
                experience, I would welcome the chance to connect. Please feel free
                to reach out!
              </p>
            </div>
            <div className="flex justify-center items-center w-4/5">
              <ContactForm />
            </div>
            <div className="flex flex-row justify-center gap-8 p-4">
              <StyledButton
                href={"https://www.linkedin.com/in/chrgarcia19/"}
                text={""}
                color={"bg-cyan-500  dark:bg-cyan-700"}
                hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                icon={<FaLinkedin className="w-8 h-8" />}
                other={""}
                textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"}
                label={"Go to Christian's LinkedIn"}
                title={"Christian's LinkedIn"}
                textColor={"text-white"} 
                animation={"transition-all duration-300 ease-in-out"}              
                />
              <StyledButton
                href={"https://profile.indeed.com/p/christiang-mg6ntmr"}
                text={""}
                color={"bg-cyan-500  dark:bg-cyan-700"}
                hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                icon={<SiIndeed className="w-8 h-8" />}
                other={"py-1"}
                textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"}
                label={"Go to Christian's Indeed"}
                title={"Christian's Indeed"}
                textColor={"text-white"} 
                animation={"transition-all duration-300 ease-in-out"}              
                />
              <StyledButton
                href={"https://github.com/chrgarcia19"}
                text={""}
                color={"bg-cyan-500 dark:bg-cyan-700"}
                hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                icon={<FaGithubSquare className="w-8 h-8" />}
                other={"py-1"}
                textSize={"text-lg max-sm:text-sm max-lg:text-3xl"}
                padding={"px-6 max-lg:px-3 lg:px-4 4k:px-6 py-1 3xl:py-2"}
                label={"Go to Christian's GitHub"}
                title={"Christian's GitHub"}
                textColor={"text-white"} 
                animation={"transition-all duration-300 ease-in-out"}              
                />
              </div>
            </div>
        </div>
        <nav className="flex flex-col w-full p-2 items-center justify-center bg-cyan-500 dark:bg-cyan-700 bottom-0">
          <span className="flex flex-col items-center text-center">
            <p className="text-white max-md:text-sm 3xl:text-lg 4k:text-2xl">
              Christian Garcia ©2025
            </p>
            <p className="text-white text-sm max-md:text-xs 3xl:text-lg 4k:text-2xl">
              Created with Next.js, TypeScript, React, and TailwindCSS
            </p>
            <p className="text-white text-sm max-md:text-xs 3xl:text-lg 4k:text-2xl">
              Hosted on GitHub Pages
            </p>
          </span>
        </nav>
      </section>
    </>
  );
};

export default Contact;
