import { FaLinkedin } from "react-icons/fa";
import IconButton from "./IconButton";
import { FaGithubSquare } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const SideBar = () => {
    return (
        <>
            <div className="flex items-center w-16 h-screen">
                <nav className="flex-col items-center justify-center w-auto h-auto bg-sky-600 overflow-hidden sticky">
                    <div className="p-2">
                        <IconButton href={"https://www.linkedin.com/in/chrgarcia19/"} icon={<FaLinkedin />} />
                        <IconButton href={"https://profile.indeed.com/p/christiang-mg6ntmr"} icon={<SiIndeed />} />
                        <IconButton href={"https://github.com/chrgarcia19"} icon={<FaGithubSquare />} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SideBar;