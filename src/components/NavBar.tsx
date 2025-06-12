import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import christianImage from "../../assets/ChristianGarciaHeadshot.png";

const NavBar = () => {

    const NAV_ITEMS = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Projects", href: "#projects" }, 
        { text: "Contact", href: "#contact"}
    ]

    return (
        <>
            <nav className="flex w-full p-1 items-center justify-between bg-sky-600 overflow-hidden fixed z-10">
                <div className="flex justify-start">
                        <NavItem href={"#home"} text={""}/>
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-12 h-14 rounded-full overflow-hidden">
                                <Image 
                                    src={christianImage}
                                    alt="An image of Christian"
                                />
                            </div>
                            <p className="font-bold font-sans text-gray-200  text-2xl">Christian Garcia</p>
                        </div>
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