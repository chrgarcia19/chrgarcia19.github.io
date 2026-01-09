"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  text: string;
  textSize: string;
  padding: string;
  hovered: string;
  view: Boolean; //Changes the button to a link
};

export default function DownloadButton(props: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const itemEntered = () => setIsHovered(true);
  const itemExited = () => setIsHovered(false);

  const handleDownload = async () => {
    try {
      const response = await fetch("ChristianGarciaResume.pdf");

      if (!response.ok) {
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
  };

  return (
    <>
      {(props.view && (
        <Link
          onMouseEnter={itemEntered}
          onMouseLeave={itemExited}
          href={"ChristianGarciaResume.pdf"}
          aria-label="View Résumé"
          title="View Christian's Résumé"
          className={`${props.textSize} max-lg:border-2 max-sm:text-center font-semibold shadow-sm rounded-full ease-in-out text-slate-700 dark:text-white ${props.padding} hover:text-gray-200 border-2 border-button-primary ${isHovered ? `${props.hovered}`: ""}`}
        >
          <div className="flex items-center justify-center">{props.text}</div>
        </Link>
      )) || (
        <button
          onClick={handleDownload}
          onMouseEnter={itemEntered}
          onMouseLeave={itemExited}
          aria-label="Download Résumé"
          title="Download Christian's Résumé"
          className={`${props.textSize} max-lg:border-2 max-lg:border-white max-sm:text-center font-semibold shadow-sm rounded-full border-b-[3px] border-transparent ease-in-out text-white ${props.padding} hover:text-gray-200 background-primary transition-all duration-300 ${isHovered ? `${props.hovered}` : ""}`}
        >
          <div className="flex items-center justify-center">{props.text}</div>
        </button>
      )}
    </>
  );
}
