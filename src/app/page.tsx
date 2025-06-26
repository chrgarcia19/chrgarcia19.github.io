import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../assets/PaintTestImage.png";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";

import Homepage from "./(home)/page";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Homepage />
  
      <div id="about" className="flex items-center justify-center p-5 w-full h-screen">
        <h2 className="flex items-start justify-start font-bold text-3xl p-6">About Me</h2>
          <div className="flex w-1/2">
            <p className="text-xl font-semibold">Hello! I'm Christian,</p>
            <br/>
            <p>An aspiring Software Engineer constructing reliable yet impactful software solutions to provide a functional user experience. With a Bachelor’s of Science in Computer Science, I am enthusiastic about Software Engineering and Full Stack Development. My journey into the Computer Science field initially centered around curiosity. That curiosity has blossomed into a profound passion to learn, design, and collaborate on software that will make a difference. </p>
          </div>
          <div className="flex w-1/2">

          </div>               
      </div>
      <div id="projects">
        <SectionHeader title={"Projects"} />
        <ProjectCard 
          name={"Paint"} 
          description={"This project required me to create my own representation of a drawing and editing application with similar capabilities to Microsoft Paint using Java and JavaFX."} 
          tools={["Java", "JavaFX", "Agile Method of Software Development", "Unit Testing", "Netbeans", "IntelliJ", "JUnit", "Javadoc", "Unified Modeling Language (UML)"]} 
          image={paintImage} imageAlt={"A Screenshot from Christian's Paint project"} 
          link={"/paint"} />
      </div>
    </>
  );
}
