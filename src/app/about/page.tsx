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
        className="p-5 w-full pt-14 pb-14 about-background"
      >
        <h2 className="flex justify-center items-center font-bold underline text-5xl max-sm:text-3xl p-10 text-heading drop-shadow-2xl">
          About Me
        </h2>
        <div className="flex max-lg:flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-normal w-1/2 max-lg:w-full p-10 max-md:p-4 max-md:pb-12">
            <ItemBox color={""} hoveredColor={"xl:shadow-xl xl:shadow-slate-500"} width={""} boxType={"rounded-3xl"} padding={""} other={""}>
            <div className="w-[70vw] sm:w-[60vw] md:w-87.5 border-4 border-primary rounded-3xl overflow-hidden">
                <Image
                  priority={false}
                  src={christianImage}
                  alt="An Image of Christian"
                  width={350}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, 650px"
                />              
            </div>
            </ItemBox>
            <div className="justify-center p-6 max-md:p-2">
              <p className="flex text-2xl max-sm:text-lg font-semibold justify-center text-center">
                Hello! I&apos;m Christian,
              </p>
              <br />
              <div className="space-y-4 leading-relaxed text-center lg:hover:font-bold lg:hover:scale-[1.02] lg:about-text-desc transition-all duration-150">
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
                problems and improves user experiences. I&apos;m eager to contribute
                to projects that blend technical precision with meaningful
                impact.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-lg:w-full items-center justify-center gap-4">
            <h3 className="flex text-2xl max-md:text-xl max-lg:font-bold font-semibold text-center underline">
              My Academic & Professional Journey
            </h3>

            {/* College Item Box */}
            <ItemBox
              color={"about-box"}
              width={"w-full max-w-lg max-sm:max-w-full mx-auto"}
              boxType={"rounded-r-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group will-change-transform hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"event-text xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={1} 
                color={"event-num"} 
                gradient={"about-marker-gradient"} 
                textSize={"text-sm"} 
                textColor={""} 
              />
              <div className="flex flex-col items-start text-left w-full">
                  <div className="flex items-center justify-between w-full mb-2">
                    <p className="font-bold text-xl max-sm:text-lg">
                      Valparaiso University
                    </p>
                    <FaGraduationCap className="shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                  </div>
                  <p className="italic text-base max-sm:text-sm">Bachelor of Science in Computer Science</p>
                  <p className="text-sm max-sm:text-xs mt-2">August 2020 - May 2024</p>
                  <p className="text-sm max-sm:text-xs">Overall GPA: 3.854</p>
              </div>
            </ItemBox>

            <div className="flex justify-center items-center">
              <div className="animate-bounce">
                <FaArrowCircleDown className="text-2xl arrow-color"/>
              </div>
            </div>

            {/* ACM Item Box */}
            <ItemBox
              color={"about-box"}
              width={"w-full max-w-lg max-sm:max-w-full mx-auto"}
              boxType={"rounded-r-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group will-change-transform hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"event-text xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={2} 
                color={"event-num"} 
                gradient={"about-marker-gradient"} 
                textSize={"text-sm"} 
                textColor={""} 
              />
              <div className="flex flex-col items-start text-left w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <p className="font-bold text-xl max-sm:text-lg">
                    Association for Computing Machinery (ACM)
                  </p>
                  <SiAcm className="shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                </div>
                <p className="italic text-base max-sm:text-sm">President (August 2023 - May 2024)</p>
                <p className="text-sm max-sm:text-xs pt-2">
                  Managed ACM&apos;s website and coordinated diverse events, including
                  professional development workshops and campus activities.
                  Initiated and led a speaker series exploring computing&apos;s role
                  across disciplines.
                </p>
              </div>
            </ItemBox>

            <div className="flex justify-center items-center">
              <div className="animate-bounce">
                <FaArrowCircleDown className="text-2xl arrow-color"/>
              </div>
            </div>

            {/* High School Item Box */}
            <ItemBox
              color={"about-box"}
              width={"w-full max-w-lg max-sm:max-w-full mx-auto"}
              boxType={"rounded-r-lg"}
              padding={"p-6 max-sm:p-3 max-sm:pl-6 max-lg:p-4"}
              other={"relative text-left group will-change-transform hover:scale-[1.02] transition-transform duration-200"}
              hoveredColor={"event-text xl:shadow-slate-500"}
            >
              <EventMarker 
                eventNumber={3} 
                color={"event-num"} 
                gradient={"about-marker-gradient"} 
                textSize={"text-sm"} 
                textColor={""} 
              />
              <div className="flex flex-col items-start text-left w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <p className="font-bold text-xl max-sm:text-lg">
                    New Prairie High School
                  </p>
                  <FaSchool className="shrink-0 w-8 h-8 max-sm:w-6 max-sm:h-6 ml-3" />
                </div>
                <p className="italic text-base max-sm:text-sm">High School Diploma with Honors</p>
                <p className="text-sm max-sm:text-xs mt-2">August 2016 - May 2020</p>
                <p className="text-sm max-sm:text-xs">Overall GPA: 3.960</p>
              </div>
            </ItemBox>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
