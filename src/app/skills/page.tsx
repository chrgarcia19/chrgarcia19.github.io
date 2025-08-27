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
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-cyan-500 to-blue-500" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Programming Languages
            </h3>
            <ProgrammingLanguages />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-purple-500 to-pink-500" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Frameworks & Libraries
            </h3>
            <FrameworksLibraries />
          </div>
        </div>

        {/* Databases */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-green-500 to-emerald-400" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Databases
            </h3>
            <Databases />
          </div>
        </div>

        {/* Developer Tools */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-orange-400 to-red-500" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Developer Tools
            </h3>
            <DeveloperTools />
          </div>
        </div>

        {/* Operating Systems */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-yellow-400 to-amber-500" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Operating Systems
            </h3>
            <OperatingSystems />
          </div>
        </div>

        {/* Specialized Technologies */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-pink-400 to-rose-500" />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Specialized Technologies
            </h3>
            <AdditionalTools />
          </div>
        </div>

        {/* Concepts */}
        <div className="flex mb-8">
          <div className="w-[6px] rounded-l-2xl bg-gradient-to-b from-sky-400 to-indigo-500 " />
          <div className="flex-1 bg-zinc-100/70 dark:bg-zinc-600/70 rounded-r-2xl shadow-md p-6">
            <h3 className="flex justify-start max-md:justify-center text-center text-3xl max-md:text-xl 3xl:text-5xl 4k:text-7xl font-bold italic underline p-2">
              Concepts
            </h3>
            <Concepts />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
