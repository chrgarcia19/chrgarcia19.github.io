"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import StyledButton from "./StyledButton";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        {(resolvedTheme === "light" && (
          <>
            <button
              className={`p-3 3xl:p-3 4k:p-4 rounded-full transition-colors duration-300 bg-blue-800 text-gray-200`}
              onClick={() => setTheme("dark")}
              aria-label="Switch to dark mode"
              title="Switch to dark mode"
            >
              <FaMoon className="text-xl 3xl:text-2xl 4k:text-4xl" />
            </button>
          </>
        )) ||
          (resolvedTheme === "dark" && (
            <>
              <button
                className={`p-3 3xl:p-3 4k:p-4 rounded-full transition-colors duration-300 bg-orange-600 text-gray-200`}
                onClick={() => setTheme("light")}
                aria-label="Switch to light mode"
                title="Switch to light mode"
              >
                <FaSun className="text-xl 3xl:text-2xl 4k:text-4xl" />
              </button>
            </>
          ))}
      </div>
    </>
  );
}
