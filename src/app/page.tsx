import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../assets/PaintTestImage.png";
import christianImage from "../../assets/ChristianGarciaPhoto.jpg";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="pt-16">
        <div id="home">
          <SectionHeader title="Home" /> 
          {/*Remove the section header later */}
        </div>
        <div id="about">
          <SectionHeader title={"About"} />
          <div className="flex items-center justify-center p-10">
            <div className="border border-black rounded-3xl overflow-hidden w-1/6">
              <Image 
                src={christianImage} 
                alt="An image of Christian Garcia" 
                width={315} 
                height={275}
                />
            </div>
            <div className="w-4/5 p-4">
              <p className="text-xl font-semibold">Hello! My name is Christian Garcia. </p>
              <br/>
              <p>I recently graduated Summa Cum Laude from Valparaiso University with a Bachelor’s of Science in Computer Science and a minor in Mathematics. During my tenure at Valparaiso University, I filled two important positions in regards to the Department of Computing and Information Sciences. I served as the Webmaster and later the President of the Valpo Association for Computing Machinery (ACM). In addition to my duties with ACM, I provided help sessions and tutoring to students as a teaching assistant for two academic years.</p>
              <br />
              <p>I am currently seeking full time employment as a software engineer or full stack developer. My versatile skill set will allow me to adapt to whatever set of technologies needed for employment. My passion for creating software gives me the desire to collaborate with a team not only to create a product, but to continuously learn and improve my skills. If you are interested in viewing my work, my GitHub page is linked in the footer of this website.   </p>
            </div> 
                  
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
      </div>
    </>
  );
}
