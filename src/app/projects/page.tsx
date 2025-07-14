import ProjectCard from "@/components/ProjectCard";
import paintImage from "@/../assets/PaintTestImage.png";

const Projects = () => {
    return (
        <>
            <div id="projects" className="flex flex-col p-5 pt-14 w-full h-screen gap-6">
                <h2 className="flex justify-center items-center font-bold text-3xl p-10">Projects</h2>
                <div className="flex flex-row gap-12">
                    <ProjectCard 
                        name={"Paint"}
                        description={"This project required me to create my own representation of a drawing and editing application with similar capabilities to Microsoft Paint using Java and JavaFX."}
                        tools={["Java", "JavaFX", "Unit Testing", "Netbeans", "IntelliJ", "JUnit", "Javadoc", "GitHub"]}
                        image={paintImage} imageAlt={"A Screenshot from Christian's Paint project"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development", "Unified Modeling Language (UML)"]} />
                    <ProjectCard 
                        name={"Driving Time Tracker"}
                        description={""}
                        tools={["Swift", "SwiftUI", "GitHub"]}
                        image={paintImage} imageAlt={"A Screenshot from the Driving Time Tracker project"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development", "Unified Modeling Language (UML)"]} />
                </div>
                <div className="flex flex-row gap-12">
                    <ProjectCard 
                        name={"Cash Money Citations"}
                        description={""}
                        tools={["TypeScript", "JavaScript", "Visual Studio Code", "Git", "GitHub", "MongoDB", "Apache HTTP Server", "Ubuntu Linux"]}
                        image={paintImage} imageAlt={"A Screenshot from Cash Money Citations"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development"]} />
                    <ProjectCard 
                        name={"Wordle Assistant (Command Line)"}
                        description={""}
                        tools={["Python", "Git", "GitHub"]}
                        image={paintImage} imageAlt={"A Screenshot from the Driving Time Tracker project"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={[]} />
                </div>
            </div>
            
        </>
    );
}

export default Projects;