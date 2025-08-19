"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
  href: string; // Where the link is stored
  text: string; // The text displayed on the button. May be blank if the button only uses an icon
  textColor: string; // The CSS for the text color
  textSize: string; // The size of the text for the button
  label: string; // The aria-label for the button
  title: string; // The title of the button
  padding: string; // The padding of the button
  color: string; // The base color of the button
  hovered: string; // The CSS styles that are applied when the button is hovered
  animation: string; // The CSS for animations for each button
  icon: ReactNode; // The React Icon that will act as the button
  other: string; // Other CSS styling
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
        className={`${props.color} ${props.textSize} max-lg:border-2 text-center font-semibold shadow-sm rounded-full ${props.animation} ${props.textColor} ${props.padding} hover:text-gray-200 ${isHovered ? `${props.hovered}` : ""} ${props.other}`}
      >
        <div className="flex flex-row items-center justify-center gap-x-2">
          {props.icon} {props.text}
        </div>
      </Link>
    </>
  );
};

export default StyledButton;
