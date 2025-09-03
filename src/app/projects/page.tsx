import ProjectCard from "@/components/ProjectCard";
import paintImage from "@/../public/PaintImage.png";
import dttImage from "@/../public/DrivingTimeTrackerCollage.png";
import cmcImage from "@/../public/CashMoneyCitationsImage.png";
import waImage from "@/../public/WordleAssistantCMD.png";
import portfolioImage from "@/../public/Portfolio.png";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col flex-grow justify-center items-center p-10 pt-14 w-full gap-8 bg-zinc-300 dark:bg-zinc-800"
      >
        <h2 className="flex justify-center items-center font-bold underline text-5xl max-sm:text-3xl p-10 text-blue-950 dark:text-blue-300 drop-shadow-2xl">
          Projects
        </h2>
        <div className="flex flex-row max-md:flex-col flex-wrap h-full gap-12 justify-center">
          <ProjectCard
            name={"Paint"}
            description={
              "A simplified drawing app modeled after Microsoft Paint, built under tight weekly deadlines with a predefined feature set. Focused on usability, responsiveness, and efficient time management."
            }
            skills={[
              "Java",
              "JavaFX",
              "Unit Testing",
              "Netbeans",
              "IntelliJ",
              "JUnit",
              "Javadoc",
              "GitHub",
              "Agile Method of Software Development",
              "Unified Modeling Language (UML)",
            ]}
            image={paintImage}
            imageAlt={"A Screenshot from Christian's Paint project"}
            link={"https://github.com/chrgarcia19/Paint-n-Suffering"}
            status={true}
          />
          <ProjectCard
            name={"Driving Time Tracker"}
            description={
              "Developed a mobile app with a team of three to monitor driving hours for residents learning to drive in Indiana. Transformed client requirements into practical features, ensuring the app met user needs."
            }
            skills={[
              "Swift",
              "SwiftUI",
              "GitHub",
              "Unified Modeling Language (UML)",
              "Agile Method of Software Development",
            ]}
            image={dttImage}
            imageAlt={"A Screenshot from the Driving Time Tracker"}
            link={"https://github.com/chrgarcia19/Paint-n-Suffering"}
            status={true}
          />
          <ProjectCard
            name={"Cash Money Citations"}
            description={
              "Collaborated with a team of four to build a web app for managing citation data and bibliographies. Took a lead role in client communication, feature planning, and UI design, while contributing to development and maintenance of the web server."
            }
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Visual Studio Code",
              "Git",
              "GitHub",
              "MongoDB",
              "Mongoose",
              "Apache HTTP Server",
              "Ubuntu Linux",
              "Agile Method of Software Development",
            ]}
            image={cmcImage}
            imageAlt={"A Screenshot from Cash Money Citations"}
            link={"https://github.com/chrgarcia19/Paint-n-Suffering"}
            status={true}
          />
          <ProjectCard
            name={"Christian's Portfolio Website"}
            description={
              "A personal portfolio highlighting my academic and professional journey, ongoing and completed projects, and technical skills. Designed to be clean, organized, and easy to navigate as a central hub for my work and growth as a developer."
            }
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "TailwindCSS",
              "Git",
              "GitHub",
            ]}
            image={portfolioImage}
            imageAlt={"A Screenshot from Christian's Portfolio Website"}
            link={"https://github.com/chrgarcia19/christian-garcia.github.io"}
            status={false}
          />
          <ProjectCard
            name={"Wordle Assistant (Command Line)"}
            description={
              "Created a command-line tool to assist Wordle players by suggesting potential guesses based on user input and letter status. Designed to enhance gameplay strategy for daily puzzles."
            }
            skills={["Python", "Git", "GitHub"]}
            image={waImage}
            imageAlt={"A Screenshot from the Wordle Assistant project"}
            link={"https://github.com/chrgarcia19/Paint-n-Suffering"}
            status={false}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
