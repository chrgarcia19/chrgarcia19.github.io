/* eslint-disable react/no-unescaped-entities */
import ItemBox from "@/components/ItemBox";
import christianImage from "@/../public/ChristianGarciaPhoto.jpg";
import Image from "next/image";
import { FaGraduationCap, FaSchool } from "react-icons/fa6";
import { SiAcm } from "react-icons/si";
import EventMarker from "@/components/EventMarker";
import { FaArrowCircleDown } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 w-full 3xl:h-screen 3xl:place-content-center pt-14 bg-zinc-300 dark:bg-zinc-800"
      >
        <h2 className="flex justify-center items-center font-bold underline text-5xl max-sm:text-3xl 3xl:text-6xl 4k:text-8xl p-10 text-blue-950 dark:text-blue-300 drop-shadow-2xl">
          About Me
        </h2>
        <div className="flex max-lg:flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-normal w-1/2 max-lg:w-full p-10 max-md:p-4 max-md:pb-12">
            <ItemBox color={""} hoveredColor={"xl:shadow-xl xl:shadow-slate-500"} width={""} boxType={"rounded-3xl"} padding={""} other={""}>
            <div className="w-[70vw] sm:w-[60vw] md:w-[350px] 3xl:w-[500px] 4k:w-[650px] border-4 border-slate-400 dark:border-slate-700 rounded-3xl overflow-hidden">
                <Image
                  src={christianImage}
                  alt="An Image of Christian"
                  width={350}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1921px) 80vw, (max-width: 2560px) 90vw, 650px"
                />              
            </div>
            </ItemBox>
            <div className="justify-center p-6 max-md:p-2">
              <p className="flex text-2xl max-sm:text-lg 3xl:text-3xl 4k:text-5xl font-semibold justify-center text-center">
                Hello! I'm Christian,
              </p>
              <br />
              <div className="space-y-4 leading-relaxed text-center lg:hover:font-semibold lg:hover:text-slate-800 lg:dark:text-slate-200 transition-all duration-150">
                <p>
                  An aspiring Software Engineer with a strong interest in Full
                Stack Development, committed to building reliable and impactful
                digital solutions. With a Bachelor of Science in Computer
                Science, I bring a solid technical foundation and a passion for
                creating user-centered applications.
                </p>
                <p>
                  What began as a spark of
                curiosity has grown into a deep enthusiasm for learning,
                designing, and collaborating on software that solves real
                problems and improves user experiences. I'm eager to contribute
                to projects that blend technical precision with meaningful
                impact.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-lg:w-full items-center justify-center gap-4 4k:gap-y-10">
            <h3 className="flex text-2xl max-lg:text-lg 3xl:text-4xl 4k:text-6xl max-lg:font-bold font-semibold text-center underline">
              My Academic & Professional Journey
            </h3>
            {/* High School Item Box */}
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-full max-w-lg max-sm:max-w-full 3xl:max-w-2xl mx-auto"}
              boxType={"rounded-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"xl:dark:text-slate-200 xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={1} 
                color={"bg-cyan-500"} 
                gradient={"bg-gradient-to-b from-cyan-400 to-cyan-600"} 
                textSize={"text-sm"} 
                textColor={"text-white"} 
              />
              <div className="flex flex-col items-start text-left w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <p className="font-bold text-xl max-sm:text-lg 3xl:text-2xl 4k:text-4xl">
                    New Prairie High School
                  </p>
                  <FaSchool className="flex-shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                </div>
                <p className="italic text-base max-sm:text-sm 3xl:text-lg 4k:text-2xl">High School Diploma with Honors</p>
                <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl mt-2">August 2016 - May 2020</p>
                <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl">Overall GPA: 3.960</p>
              </div>
            </ItemBox>

            <div className="flex justify-center items-center">
              <div className="animate-bounce">
                <FaArrowCircleDown className="text-2xl text-cyan-400"/>
              </div>
            </div>

            {/* ACM Item Box */}
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-full max-w-lg max-sm:max-w-full 3xl:max-w-2xl mx-auto"}
              boxType={"rounded-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"xl:dark:text-slate-200 xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={2} 
                color={"bg-cyan-500"} 
                gradient={"bg-gradient-to-b from-cyan-400 to-cyan-600"} 
                textSize={"text-sm"} 
                textColor={"text-white"} 
              />
              <div className="flex flex-col items-start text-left w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <p className="font-bold text-xl max-sm:text-lg 3xl:text-2xl 4k:text-4xl">
                    Association for Computing Machinery (ACM)
                  </p>
                  <SiAcm className="flex-shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                </div>
                <p className="italic text-base max-sm:text-sm 3xl:text-lg 4k:text-2xl">President (August 2023 - May 2024)</p>
                <p className="text-sm max-sm:text-xs 3xl:text-base 4k:text-2xl pt-2">
                  Managed ACM’s website and coordinated diverse events, including
                  professional development workshops and campus activities.
                  Initiated and led a speaker series exploring computing’s role
                  across disciplines.
                </p>
              </div>
            </ItemBox>

            <div className="flex justify-center items-center">
              <div className="animate-bounce">
                <FaArrowCircleDown className="text-2xl text-cyan-400"/>
              </div>
            </div>

            {/* College Item Box */}
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-full max-w-lg max-sm:max-w-full 3xl:max-w-2xl mx-auto"}
              boxType={"rounded-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"xl:dark:text-slate-200 xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={3} 
                color={"bg-cyan-500"} 
                gradient={"bg-gradient-to-b from-cyan-400 to-cyan-600"} 
                textSize={"text-sm"} 
                textColor={"text-white"} 
              />
              <div className="flex flex-col items-start text-left w-full">
                  <div className="flex items-center justify-between w-full mb-2">
                    <p className="font-bold text-xl max-sm:text-lg 3xl:text-2xl 4k:text-4xl">
                      Valparaiso University
                    </p>
                    <FaGraduationCap className="flex-shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                  </div>
                  <p className="italic text-base max-sm:text-sm 3xl:text-lg 4k:text-2xl">Bachelor of Science in Computer Science</p>
                  <p className="text-sm max-sm:text-xs 3xl:text-base 4k:text-xl mt-2">August 2020 - May 2024</p>
                  <p className="text-sm max-sm:text-xs 3xl:text-base 4k:text-xl">Overall GPA: 3.854</p>
              </div>
            </ItemBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
