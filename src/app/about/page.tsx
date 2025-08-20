/* eslint-disable react/no-unescaped-entities */
import ItemBox from "@/components/ItemBox";
import christianImage from "@/../public/ChristianGarciaPhoto.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 w-full 3xl:h-screen 3xl:place-content-center pt-14 bg-zinc-300 dark:bg-zinc-800"
      >
        <h2 className="flex justify-center items-center font-bold text-5xl max-sm:text-3xl 3xl:text-6xl 4k:text-8xl p-10 text-blue-950 dark:text-blue-300">
          About Me
        </h2>
        <div className="flex max-lg:flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-normal w-1/2 max-lg:w-full p-10 max-sm:p-4">
            <div className="w-[70vw] sm:w-[60vw] md:w-[350px] 3xl:w-[500px] 4k:w-[650px] border-2 border-slate-400 dark:border-slate-700 rounded-3xl overflow-hidden">
              <Image
                src={christianImage}
                alt="An Image of Christian"
                width={350}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1921px) 80vw, (max-width: 2560px) 90vw, 650px"
              />
            </div>
            <div className="justify-center p-6 max-md:p-2">
              <p className="flex text-2xl max-sm:text-lg 3xl:text-3xl 4k:text-5xl font-semibold justify-center text-center">
                Hello! I'm Christian,
              </p>
              <br />
              <p className="pl-4 pr-4 max-md:pl-1 max-md:pr-1 max-sm:text-sm 3xl:text-xl 4k:text-3xl text-center">
                An aspiring Software Engineer with a strong interest in Full
                Stack Development, committed to building reliable and impactful
                digital solutions. With a Bachelor of Science in Computer
                Science, I bring a solid technical foundation and a passion for
                creating user-centered applications. What began as a spark of
                curiosity has grown into a deep enthusiasm for learning,
                designing, and collaborating on software that solves real
                problems and improves user experiences. I'm eager to contribute
                to projects that blend technical precision with meaningful
                impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-lg:w-full items-center justify-center gap-y-12 max-lg:gap-y-4 4k:gap-y-16">
            <div className="flex text-xl max-lg:text-lg 3xl:text-4xl 4k:text-6xl max-lg:font-bold font-semibold text-center">
              My Academic & Professional Journey
            </div>
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-4/6 max-sm:w-full 3xl:w-5/6"}
              boxType={"rounded-lg"}
              padding={"p-4 max-lg:p-2"}
              other={"text-center"}
              hoveredColor={"xl:shadow-slate-500"}
            >
              <p className="font-bold text-2xl max-sm:text-xl 3xl:text-3xl 4k:text-5xl">
                Valparaiso University
              </p>
              <p className="italic max-sm:text-sm 3xl:text-xl 4k:text-3xl">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl">
                August 2020 - May 2024
              </p>
              <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl">
                Overall GPA: 3.854
              </p>
            </ItemBox>
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-4/6 max-sm:w-full 3xl:w-5/6"}
              boxType={"rounded-lg"}
              padding={"p-4 max-lg:p-2"}
              other={"text-center"}
              hoveredColor={"xl:shadow-slate-500"}
            >
              <p className="font-bold text-2xl max-sm:text-xl 3xl:text-3xl 4k:text-5xl">
                Association for Computing Machinery (ACM)
              </p>
              <p className="italic max-sm:text-sm 3xl:text-lg 4k:text-3xl">
                President (August 2023 - May 2024)
              </p>
              <p className="text-sm max-sm:text-xs 3xl:text-base 4k:text-2xl">
                Managed ACM’s website and coordinated diverse events, including
                professional development workshops and campus activities.
                Initiated and led a speaker series exploring computing’s role
                across disciplines.
              </p>
            </ItemBox>
            <ItemBox
              color={"bg-cyan-600 dark:bg-cyan-700"}
              width={"w-4/6 max-sm:w-full 3xl:w-5/6"}
              boxType={"rounded-lg"}
              padding={"p-4 max-lg:p-2"}
              other={"text-center"}
              hoveredColor={"xl:shadow-slate-500"}
            >
              <p className="font-bold text-2xl max-sm:text-xl 3xl:text-3xl 4k:text-5xl">
                New Prairie High School
              </p>
              <p className="italic max-sm:text-sm 3xl:text-xl 4k:text-3xl">
                High School Diploma with Honors
              </p>
              <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl">
                August 2016 - May 2020
              </p>
              <p className="text-sm max-sm:text-xs 3xl:text-lg 4k:text-2xl">
                Overall GPA: 3.960
              </p>
            </ItemBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
