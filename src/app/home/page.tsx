/* eslint-disable react/no-unescaped-entities */
import StyledButton from "@/components/StyledButton";
import DownloadButton from "@/components/DownloadButton";
import HomeText from "@/components/HomeText";

const Homepage = () => {
  return (
    <>
      <div className="flex justify-center items-center max-sm:pt-0 w-full h-screen bg-zinc-300 dark:bg-zinc-800 dark:bg-gradient-to-br from-zinc-700 to-zinc-800">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-x-16 p-10 max-sm:p-6">
            <div className="flex flex-col justify-center space-y-2">
              <p className="flex justify-center text-5xl max-sm:text-4xl 3xl:text-7xl 4k:text-8xl font-semibold">
                Hi! I am
              </p>
              <h1 className="flex font-extrabold text-7xl max-sm:text-3xl 3xl:text-8xl 4k:text-9xl justify-center text-blue-950 dark:text-blue-300">
                Christian Garcia
              </h1>
              <br />
              <HomeText />
            </div>
          </div>
          <div className="flex place-content-center gap-8 max-sm:gap-2 4k:gap-10 max-sm:p-4 max-md:p-6 4k:p-8">
            <StyledButton
              href={"#about"}
              text={"More About Me"}
              color={"border-cyan-500 dark:border-cyan-700"}
              hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-xl shadow-xl"}
              icon={null}
              other={"shadow-lg border-2"}
              textSize={"text-xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"}
              padding={"max-sm:px-2 md:px-3 lg:px-4 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"}
              label={"Learn More About Christian"}
              title={"Learn More About Christian"}
              textColor={"text-slate-700 dark:text-white"} 
              animation={"transition-all duration-300 ease-in-out"}              
              />
            <StyledButton
              href={"#projects"}
              text={"View Projects"}
              color={"bg-cyan-500 dark:bg-cyan-700"}
              hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-3xl shadow-2xl"}
              icon={null}
              other={"shadow-xl"}
              textSize={"text-2xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"}
              padding={"max-sm:px-2 md:px-3 lg:px-8 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"}
              label={"View Projects Section"}
              title={"View Projects Section"}
              textColor={"text-white"} 
              animation={"transition-all duration-300 ease-in-out"}              
              />
            <DownloadButton
              text={"View Résumé"}
              padding={"max-sm:px-2 md:px-3 lg:px-4 3xl:px-6 4k:px-10 py-3 max-sm:py-1 4k:py-5"}
              textSize={"text-xl max-sm:text-sm 3xl:text-3xl 4k:text-5xl"}
              view={true} 
              hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-xl shadow-xl"}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
