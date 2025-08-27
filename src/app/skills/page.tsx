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
          My Technical Skills
        </h2>

        {/* Programming Languages */}
        <div className="bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
          Programming Languages
          </h3>
          <ProgrammingLanguages />
        </div>

        {/* Frameworks & Libraries */}
        <div className="bg-gradient-to-l from-zinc-300 via-cyan-50 to-zinc-300 dark:from-zinc-800 dark:via-cyan-900 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Frameworks & Libraries
          </h3>
          <FrameworksLibraries />
        </div>

        {/* Databases */}
        <div className="bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Databases
          </h3>
          <Databases />
        </div>

        {/* Developer Tools */}
        <div className="bg-gradient-to-l from-zinc-300 via-cyan-50 to-zinc-300 dark:from-zinc-800 dark:via-cyan-900 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Developer Tools
          </h3>
          <DeveloperTools />
        </div>

        {/* Operating Systems */}
        <div className="bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Operating Systems
          </h3>
          <OperatingSystems />
        </div>

        {/* Specialized Technologies */}
        <div className="bg-gradient-to-l from-zinc-300 via-cyan-50 to-zinc-300 dark:from-zinc-800 dark:via-cyan-900 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Specialized Technologies
          </h3>
          <AdditionalTools />
        </div>

        {/* Concepts */}
        <div className="bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 rounded-lg">
          <h3 className="flex justify-start max-md:justify-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
            Concepts
          </h3>
          <Concepts />
        </div>
      </section>
    </>
  );
};

export default Skills;
