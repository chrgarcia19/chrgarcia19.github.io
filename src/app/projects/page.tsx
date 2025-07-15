import ProjectCard from "@/components/ProjectCard";
import paintImage from "@/../assets/PaintTestImage.png";
import dttImage from "@/../assets/DrivingTimeTrackerCollage.png";
import cmcImage from "@/../assets/CashMoneyCitationsImage.png";
import waImage from "@/../assets/WordleAssistantCMD.png";

const Projects = () => {
    return (
        <>
            <div id="projects" className="flex flex-col p-5 pt-14 w-full h-screen gap-6">
                <h2 className="flex justify-center items-center font-bold text-3xl p-4">Projects</h2>
                <div className="flex flex-row gap-12 justify-center">
                    <ProjectCard 
                        name={"Paint"}
                        description={"A simplified drawing app modeled after Microsoft Paint, built under tight weekly deadlines with a predefined feature set. Focused on usability, responsiveness, and efficient time management."}
                        tools={["Java", "JavaFX", "Unit Testing", "Netbeans", "IntelliJ", "JUnit", "Javadoc", "GitHub"]}
                        image={paintImage} imageAlt={"A Screenshot from Christian's Paint project"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development", "Unified Modeling Language (UML)"]} />
                    <ProjectCard 
                        name={"Driving Time Tracker"}
                        description={"Developed a mobile app with a team of three to monitor driving hours for learner drivers in Indiana. Transformed client requirements into practical features, ensuring the app met user needs."}
                        tools={["Swift", "SwiftUI", "GitHub"]}
                        image={dttImage} imageAlt={"A Screenshot from the Driving Time Tracker"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development", "Unified Modeling Language (UML)"]} />
                </div>
                <div className="flex flex-row gap-12 justify-center">
                    <ProjectCard 
                        name={"Cash Money Citations"}
                        description={"Collaborated with a team of four to build a web app for managing citation data and bibliographies. Took a lead role in client communication, feature planning, and UI design, while contributing to the development and maintenance of the web server."}
                        tools={["TypeScript", "JavaScript", "Visual Studio Code", "Git", "GitHub", "MongoDB", "Apache HTTP Server", "Ubuntu Linux"]}
                        image={cmcImage} imageAlt={"A Screenshot from Cash Money Citations"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={["Agile Method of Software Development"]} />
                    <ProjectCard 
                        name={"Wordle Assistant (Command Line)"}
                        description={"Created a command-line tool to assist Wordle players by suggesting potential guesses based on user input and letter status. Designed to enhance gameplay strategy for daily puzzles."}
                        tools={["Python", "Git", "GitHub"]}
                        image={waImage} imageAlt={"A Screenshot from the Wordle Assistant project"}
                        link={"https://github.com/chrgarcia19/Paint-n-Suffering"} 
                        concepts={[]} />
                </div>
            </div>
            
        </>
    );
}

export default Projects;