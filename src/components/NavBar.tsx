import DownloadButton from "./DownloadButton";
import ItemBox from "./ItemBox";
import StyledButton from "./StyledButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const NavBar = () => {

    const NAV_ITEMS = [
        { text: "Home", href: "/" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" }, 
        { text: "Contact", href: "#contact"}
    ]

    return (
        <>
            <nav className="flex w-full p-2 items-center justify-between bg-cyan-500 dark:bg-cyan-700 overflow-hidden fixed z-10">
                <div className="flex justify-start">
                    <ItemBox color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} width={""} boxType={"rounded-full"} padding={"px-6"} other={""}>
                        <h1 className="text-3xl text-white font-bold">Christian Garcia</h1> 
                    </ItemBox>
                </div>    
                <div className="flex space-x-4 mr-10">
                    {NAV_ITEMS.map((item: any, index: number) => (
                        <StyledButton key={index} href={item.href} text={item.text} color={"bg-cyan-500 dark:bg-cyan-700"} hoveredColor={"bg-cyan-600 dark:hover:bg-cyan-600"} icon={null} other={""} />
                    ))}
                    <DownloadButton text={"Résumé"} />
                    <ThemeSwitcher />
                </div>
            </nav>       
        </>
    )
}

export default NavBar;