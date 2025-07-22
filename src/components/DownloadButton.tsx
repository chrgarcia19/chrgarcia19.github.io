'use client'

import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
    text: string;
};

export default function DownloadButton(props: Props) {

    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    const handleDownload = async () => {

        try {
            const response = await fetch("ChristianGarciaResume.pdf");      
            
            if (!response.ok){
                throw new Error(`Failed to download resume: ${response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = url;
            link.download = "ChristianGarciaResume.pdf";
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);   
        
            toast.success("Download Successful!");
        } catch (error) {
            console.error("Error downloading file!: ", error);
            toast.error("Download Failed!");
        }
    }

    return (
        <>
            <button onClick={handleDownload} onMouseEnter={itemEntered} onMouseLeave={itemExited}
                    className={`text-lg font-semibold shadow-sm rounded-full ease-in-out text-white inline-block px-6 py-1 hover:text-gray-200 bg-cyan-500 dark:bg-cyan-700 ${isHovered ? "bg-cyan-600 dark:bg-cyan-600 font-bold text-xl shadow-xl" : ''}`}>
                    {props.text}
            </button>
        </>
    );
}
