"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
  href: string;
  text: string;
  textColor: string;
  label: string;
  title: string;
  textSize: string;
  padding: string;
  color: string;
  hovered: string; // Styling for when hovered
  icon: ReactNode; // The React Icon that will act as the button
  other: string; //Other CSS styling
};

const StyledButton = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemEntered = () => setIsHovered(true);
  const itemExited = () => setIsHovered(false);

  return (
    <>
      <Link
        onMouseEnter={itemEntered}
        onMouseLeave={itemExited}
        onTouchStart={itemEntered}
        onTouchEnd={itemExited}
        onTouchCancel={itemExited}
        href={props.href}
        aria-label={props.label}
        title={props.title}
        className={`${props.color} ${props.textSize} max-lg:border-2 text-center font-semibold shadow-sm rounded-full ease-in-out ${props.textColor} ${props.padding} hover:text-gray-200 ${isHovered ? `${props.hovered}` : ""} ${props.other}`}
      >
        <div className="flex flex-row items-center justify-center gap-x-2">
          {props.icon} {props.text}
        </div>
      </Link>
    </>
  );
};

export default StyledButton;
