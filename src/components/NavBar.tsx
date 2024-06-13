import Link from "next/link";
import NavItem from "./NavItem";

const NavBar = () => {

    const NAV_ITEMS = [
        { text: "About", href: "#about" },
        { text: "Projects", href: "#projects" },
        { text: "Skills", href: "#skills" }, 
        { text: "Organizations", href: "#organizations"}
    ]

    return (
        <>
            <nav className="flex p-6 items-center justify-between bg-sky-600 overflow-hidden">
                <div className="flex justify-start">
                    <p className="font-bold text-white text-3xl">Christian Garcia</p>
                </div>    
                <div className="flex space-x-32 mr-10">
                    {NAV_ITEMS.map((item: any, index: number) => (
                        <NavItem key={index} href={item.href} text={item.text} />
                    ))}
                </div>
            </nav>       
        </>
    )
}

export default NavBar;