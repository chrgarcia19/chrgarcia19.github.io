import ProjectCard from "@/components/ProjectCard";
import paintImage from "../../assets/PaintTestImage.png";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Homepage from "./(home)/page";
import AboutMe from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Homepage />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
