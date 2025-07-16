'use client'

import { useState } from "react";

export default function DownloadButton() {

    const [isHovered, setIsHovered] = useState(false);
    const itemEntered = () => setIsHovered(true);
    const itemExited = () => setIsHovered(false);

    const [download, setDownload] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        setLoading(true);
        setError('');

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
        } catch (error) {
            console.error("Error downloading file!: ", error);
            setError("Could not download file!");
        }
    }

    //{error && <p className="text-red-500 text-sm">{error}</p>}

    return (
        <>
            <button onClick={handleDownload} onMouseEnter={itemEntered} onMouseLeave={itemExited}
                    className={`text-lg font-semibold shadow-sm rounded-full ease-in-out text-white inline-block px-6 py-1 hover:text-gray-200 bg-sky-600 ${isHovered ? "bg-sky-500 font-bold text-xl shadow-xl" : ''}`}>
                    Download Resume
            </button>
        </>
    );
}
