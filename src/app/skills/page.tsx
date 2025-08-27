import ProgrammingLanguages from "./languages";
import FrameworksLibraries from "./frameworkslibs";
import Databases from "./dbs";
import DeveloperTools from "./devtools";
import OperatingSystems from "./os";
import AdditionalTools from "./moretools";
import Concepts from "./concepts";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex flex-col pt-10 pl-14 pr-14 pb-10 max-md:pl-4 max-md:pr-4 4k:pt-14 w-full bg-zinc-300 dark:bg-zinc-800"
      >
        <h2 className="flex justify-center items-center font-bold underline text-5xl max-sm:text-3xl 3xl:text-6xl 4k:text-8xl p-10 pb-16 text-blue-950 dark:text-blue-300 drop-shadow-2xl">
          My Techical Skills
        </h2>
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Programming Languages
        </h3>
        <ProgrammingLanguages />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Frameworks & Libraries
        </h3>
        <FrameworksLibraries />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Databases
        </h3>
        <Databases />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Developer Tools
        </h3>
        <DeveloperTools />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Operating Systems
        </h3>
        <OperatingSystems />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Additional Tools
        </h3>
        <AdditionalTools />
        <h3 className="flex justify-start max-md:justify-center text-2xl max-md:text-xl 3xl:text-4xl 4k:text-6xl font-bold">
          Concepts
        </h3>
        <Concepts />
      </section>
    </>
  );
};

export default Skills;
