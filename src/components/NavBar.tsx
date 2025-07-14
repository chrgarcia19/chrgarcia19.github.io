import StyledButton from "./StyledButton";

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
            <nav className="flex w-full p-2 items-center justify-between bg-sky-600 overflow-hidden fixed z-10">
                <div className="flex justify-start">
                    <StyledButton href={"/"} text={"Christian Garcia"} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined}/>
                </div>    
                <div className="flex space-x-12 mr-10">
                    {NAV_ITEMS.map((item: any, index: number) => (
                        <StyledButton key={index} href={item.href} text={item.text} color={"bg-sky-600"} hoveredColor={"bg-sky-500"} icon={undefined} />
                    ))}
                </div>
            </nav>       
        </>
    )
}

export default NavBar;