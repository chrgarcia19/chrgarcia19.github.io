'use client'

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DownloadButton from "./DownloadButton";
import ItemBox from "./ItemBox";
import StyledButton from "./StyledButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";

const NavBar = () => {

    const NAV_ITEMS = [
        { text: "Home", href: "/" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" }, 
        { text: "Contact", href: "#contact"}
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => { setMenuOpen(!menuOpen); }



    return (
        <>
            <nav className="flex w-full p-2 items-center justify-between bg-cyan-500 dark:bg-cyan-700 overflow-hidden lg:fixed z-10">
                <div className="flex justify-start">
                    <ItemBox color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} width={""} boxType={"rounded-full"} padding={"px-2 sm:px-6"} other={""}>
                        <h1 className="text-xl sm:text-3xl text-white font-bold">Christian Garcia</h1> 
                    </ItemBox>
                </div>    
                <div className="max-lg:hidden flex items-center xl:space-x-6 lg:space-x-2 mr-10 lg:mr-2">
                    {NAV_ITEMS.map((item: any, index: number) => (
                        <StyledButton key={index} href={item.href} text={item.text} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} />
                    ))}
                    <DownloadButton text={"Résumé"} />
                    <ThemeSwitcher />
                </div>
                {/*For Mobile*/}
                <div className="lg:hidden flex items-center gap-4 z-10 mr-1">
                    <ThemeSwitcher />
                    <div onClick={handleOpen}>
                        {menuOpen ? <AiOutlineClose size={25} className="text-white"/> : <AiOutlineMenu size={25} className="text-white" />}
                    </div> 
                </div>   
                <div className={menuOpen ? "lg:hidden absolute top-10 left-0 right-0 bottom-0 flex justify-center items-center w-full h-fit bg-cyan-500 dark:bg-cyan-700 text-center ease-in duration-500 p-6" : "lg:hidden absolute top-10 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-fit bg-cyan-500 dark:bg-cyan-700 text-center ease-in duration-500 p-6"}>
                    <ul className="flex flex-col gap-4">
                        {NAV_ITEMS.map((item: any, index: number) => (
                            <StyledButton key={index} href={item.href} text={item.text} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} />
                        ))}
                        <DownloadButton text={"Résumé"} />
                    </ul>
                </div>

            </nav>       
        </>
    )
}

export default NavBar;