"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DownloadButton from "./DownloadButton";
import ItemBox from "./ItemBox";
import StyledButton from "./StyledButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface NavItems {
  text: string,
  href: string,
  label: string,
  title: string,
};

const NavBar = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const NAV_ITEMS: NavItems[] = [
    {
      text: "Home",
      href: "/",
      label: "Go to Homepage",
      title: "Go to Homepage",
    },
    {
      text: "About",
      href: "#about",
      label: "Go to About Section",
      title: "Go to About Section",
    },
    {
      text: "Skills",
      href: "#skills",
      label: "Go to Skills Section",
      title: "Go to Skills Section",
    },
    {
      text: "Projects",
      href: "#projects",
      label: "Go to Projects Section",
      title: "Go to Projects Section",
    },
    {
      text: "Contact",
      href: "#contact",
      label: "Go to Contact Section",
      title: "Go to Contact Section",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  const pathname = usePathname();

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {

    const getActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < 100){ return "/"; }

      let currentSection = "/";
      let closestDistance = Infinity;

      for (const item of NAV_ITEMS){
        if (item.href.startsWith("#")){
          const sectionId = item.href.substring(1);
          const section = document.getElementById(sectionId);

          if (section){
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionCenter = sectionTop + (rect.height / 2);
            const viewportCenter = scrollPosition + (windowHeight / 2);

            const distance = Math.abs(sectionCenter - viewportCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              currentSection = item.href;
            }
          }
        }
      }
      return currentSection;
    };

    const handleScroll = () => {
      const active = getActiveSection();
      if (active !== activeSection){
        setActiveSection(active);
      }
    };

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", throttledHandleScroll);
    }
  }, [activeSection, NAV_ITEMS]);

  const isActive = (href: string) => {
    if (pathname !== "/" && href === "/"){
      return false;
    }
    return (activeSection === href);
  };

  return (
    <>
      {/* Debug info - remove after fixing */}
      <div style={{position: 'fixed', top: '60px', left: '10px', background: 'black', color: 'white', padding: '10px', zIndex: 1000, fontSize: '12px'}}>
        <div>Active Section: {activeSection}</div>
        <div>Pathname: {pathname}</div>
        <div>Scroll Y: {typeof window !== 'undefined' ? window.scrollY : 'N/A'}</div>
      </div>

      <nav className="flex w-full p-2 items-center justify-between bg-cyan-500 dark:bg-cyan-700 overflow-hidden fixed z-10">
        <div className="flex">
          <ItemBox
            color={"bg-cyan-500 dark:bg-cyan-700"}
            hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"}
            width={""}
            boxType={"rounded-full"}
            padding={"px-4 max-sm:px-2 3xl:px-6 3xl:py-1"}
            other={"transition-all duration-300"}
          >
            <h1 className="text-xl sm:text-3xl 3xl:text-5xl 4k:text-7xl text-white font-bold">
              Christian Garcia
            </h1>
          </ItemBox>
        </div>
        <div className="max-lg:hidden flex items-center xl:space-x-6 lg:space-x-2 mr-4 max-lg:mr-2 text-slate">
          {NAV_ITEMS.map((item: any, index: number) => (
              <StyledButton
                key={index}
                href={item.href}
                text={item.text}
                color={"bg-cyan-500 dark:bg-cyan-700"}
                hovered={"hover:bg-cyan-600 dark:hover:bg-cyan-600"}
                icon={null}
                other={isActive(item.href) ? "border-b-[3px] border-white transform transition-all duration-300" : "border-b-[3px] border-transparent hover:bg-cyan-600 dark:hover:bg-cyan-600"}
                textSize={"text-lg max-sm:text-sm max-lg:text-3xl 3xl:text-2xl 4k:text-4xl"}
                padding={"px-6 max-sm:px-2 lg:px-4 3xl:px-6 py-1 3xl:py-2"}
                label={item.label}
                title={item.title}
                textColor={isActive(item.href) ? "text-blue-200" : "text-white"} 
                animation={"transition-all duration-300 ease-in-out"}              
              />
          ))}
          <DownloadButton
            text={"Résumé"}
            padding={"px-6 max-sm:px-2 lg:px-4 3xl:px-6 py-1 3xl:py-2"}
            textSize={"text-lg max-sm:text-sm max-lg:text-3xl 3xl:text-2xl 4k:text-4xl"}
            view={false} 
            hovered={"bg-cyan-600 dark:hover:bg-cyan-600 font-bold text-xl shadow-xl"} />
          <ThemeSwitcher />
        </div>


        {/*For Mobile*/}
        <div className="lg:hidden flex items-center gap-4 z-10 mr-1">
          <ThemeSwitcher />
          <div onClick={handleOpen}>
            {menuOpen ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-white" />
            )}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "lg:hidden fixed z-10 top-12 left-0 right-0 bottom-0 flex justify-center items-center w-full h-fit border-t-2 border-white bg-cyan-500 dark:bg-cyan-700 text-center opacity-95 ease-in duration-500 p-4"
              : "lg:hidden fixed z-10 top-12 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-fit bg-cyan-500 dark:bg-cyan-700 text-center opacity-95 ease-in duration-500 p-4"
          }
        >
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item: any, index: number) => (
              <StyledButton
                key={index}
                href={item.href}
                text={item.text}
                color={"bg-cyan-500 dark:bg-cyan-700"}
                hovered={"bg-cyan-600 dark:hover:bg-cyan-600"}
                icon={null}
                other={""}
                textSize={"max-sm:text-xl max-lg:text-3xl"}
                padding={"max-sm:px-4 max-sm:py-1 md:px-5 lg:px-4"}
                label={item.label}
                title={item.title}
                textColor={"text-white"} 
                animation={"transition-all duration-300 ease-in-out"}                
                />
            ))}
            <DownloadButton
              text={"Résumé"}
              padding={"max-sm:px-4 max-sm:py-1 lg:px-4"}
              textSize={"max-sm:text-xl max-lg:text-3xl"}
              view={false} 
              hovered={""}            
              />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
