import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
    href: string; // The URL of the website 
    icon: ReactNode; // The React Icon that will act as the button
}

const IconButton = (props: Props) => {

    //className="text-3xl flex justify-center items-center"

    return (
        <>
            <div className="flex items-center justify-center gap-8 p-1">
                <Link href={props.href} passHref>
                    <button>
                        <div className="text-4xl flex justify-center items-center">
                            {props.icon}
                        </div>
                    </button>
                </Link>
            </div>
        </>
    );
}

export default IconButton;