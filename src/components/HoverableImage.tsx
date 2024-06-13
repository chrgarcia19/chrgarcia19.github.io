'use client'

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    link: string; // The url for the project page
    image: StaticImageData; // The path/address to the image
    imageAlt: string; // The alternative words if the image cannot be accessed
}

const HoverableImage = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageEntered = () => setIsHovered(true);
    const imageExited = () => setIsHovered(false);    
    
    return (
        <>
            <div onMouseEnter={imageEntered} onMouseLeave={imageExited}>
                {isHovered && (
                    <>
                        <div className="relative">
                            <Link href={props.link}>
                                <Image className="blur" src={props.image} alt={props.imageAlt}/>
                            </Link>
                            <div className="absolute flex top-24 left-14 justify-center items-center" >
                                <p className="font-bold tracking-wider text-3xl">View Project</p>
                            </div>
                        </div>
                    </>
                ) || (
                    <Image src={props.image} alt={props.imageAlt}/>
                )}
            </div>

        </>
    )
}

export default HoverableImage;