import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../assets/PaintTestImage.png";
import christianImage from "../../assets/ChristianGarciaPhoto.jpg";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import StyledButton from "@/components/StyledButton";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="flex flex-col items-center justify-center pt-12 h-screen">
        <div className="flex justify-center items-center gap-x-16 p-6">
          <div className="border border-black rounded-3xl overflow-hidden w-1/6">
            <Image 
              src={christianImage} 
              alt={"An Image of Christian"}
              width={1800} 
            />
          </div>
          <div className="justify-center space-y-2">
            <p className="flex font-extrabold text-7xl justify-center">Hi! I'm Christian Garcia</p>
            <br/>
            <p>An aspiring Software Engineer passionate about creating and contributing to software that makes a meaningful impact on users.</p>
          </div>
        </div>
        <div className="flex gap-8">
          <StyledButton href={"#projects"} text={"View Projects"} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined}/>
          <StyledButton href={""} text={"Download Resume"} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined}/>
        </div>
        <div className="flex gap-4 pt-20">
            <StyledButton href={"https://www.linkedin.com/in/chrgarcia19/"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaLinkedin className="w-7 h-7"/>} />
            <StyledButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<SiIndeed className="w-6 h-6"/>} />
            <StyledButton href={"https://github.com/chrgarcia19"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<FaGithubSquare className="w-7 h-7"/>} />
            <StyledButton href={"mailto:christian.garcia@valpo.edu"} text={""} color={"bg-sky-500"} hoveredColor={"bg-sky-600"} icon={<IoIosMail className="w-11 h-11"/>} />
        </div>
      </div>
      <div id="about">
        <SectionHeader title={"About"} />
        <div className="flex items-center justify-center p-10">
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
    </>
  );
}
