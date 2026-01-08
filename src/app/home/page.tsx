import StyledButton from "@/components/StyledButton";
import DownloadButton from "@/components/DownloadButton";
import HomeText from "@/components/HomeText";

const Homepage = () => {
  return (
    <>
      <section
        id="home" 
        className="relative flex justify-center items-center max-sm:pt-0 w-full h-screen bg-size-[300%_300%] animate-gradient bg-linear-to-br from-slate-200 via-zinc-300 to-stone-400 dark:from-slate-700 dark:via-zinc-800 dark:to-blue-950">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-x-16 p-10 max-sm:p-6">
            <div className="flex flex-col justify-center space-y-2">
              <p className="flex justify-center text-5xl max-sm:text-4xl font-semibold drop-shadow-md">
                Hi! I am
              </p>
              <h1 className="flex justify-center text-center font-extrabold text-7xl max-sm:text-3xl max-md:text-6xl text-blue-950 dark:text-blue-300 drop-shadow-xl">
                Christian Garcia
              </h1>
              <br />
              <HomeText />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 max-sm:gap-2 max-sm:p-4 max-md:p-6">
            <StyledButton
              href={"#about"}
              text={"More About Me"}
              color={"border-cyan-500 dark:border-cyan-700"}
              hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-xl shadow-xl"}
              icon={null}
              other={"shadow-lg border-2"}
              textSize={"text-xl max-sm:text-sm"}
              padding={"max-md:px-2 sm:px-3 lg:px-4 py-3 max-sm:py-1"}
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
              textSize={"text-2xl max-sm:text-sm"}
              padding={"max-md:px-3 sm:px-3 lg:px-8 py-3 max-sm:py-2"}
              label={"View Projects Section"}
              title={"View Projects Section"}
              textColor={"text-white"} 
              animation={"transition-all duration-300 ease-in-out"}              
              />
            <DownloadButton
              text={"View Résumé"}
              padding={"max-sm:px-2 sm:px-3 lg:px-4 py-3 max-sm:py-1"}
              textSize={"text-xl max-sm:text-sm"}
              view={true} 
              hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-xl shadow-xl"}
              />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
