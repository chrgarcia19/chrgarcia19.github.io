import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../public/PaintTestImage.png";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div id="about">About section</div>
      <ProjectCard 
        name={"Paint"} 
        description={"This project is made to resemble Microsoft Paint."} 
        tools={["Java", "JavaFX", "Agile Method of Software Development", "Unit Testing", "Netbeans", "IntelliJ", "JUnit", "Javadoc", "Unified Modeling Language (UML)"]} 
        image={paintImage} imageAlt={"A Screenshot from Christian's Paint project"} 
        link={"/paint"} />
      <div id="skills">Skills section</div>
      <div id="organizations">Orgs</div>
    </>
  );
}
