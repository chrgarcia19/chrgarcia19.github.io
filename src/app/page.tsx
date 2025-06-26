import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../assets/PaintTestImage.png";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Homepage from "./(home)/page";
import AboutMe from "./#about/page";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Homepage />
      <AboutMe />
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
