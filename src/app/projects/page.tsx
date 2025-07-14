import ProjectCard from "@/components/ProjectCard";
import paintImage from "@/../assets/PaintTestImage.png";

const Projects = () => {
    return (
        <>
            <div id="projects" className="p-5 pt-14 w-full h-screen">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">Projects</h2>
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

export default Projects;