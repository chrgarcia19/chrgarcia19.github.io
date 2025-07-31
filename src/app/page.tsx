import NavBar from "@/components/NavBar";
import Homepage from "./home/page";
import AboutMe from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Homepage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
