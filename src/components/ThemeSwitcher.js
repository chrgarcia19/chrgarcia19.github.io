"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  //const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        {(theme === "light" && (
          <>
            <button
              className={`p-2.5 4k:p-4 rounded-full transition-colors duration-300 bg-blue-800 text-gray-200`}
              onClick={() => setTheme("dark")}
              aria-label="Switch to dark mode"
              title="Switch to dark mode"
            >
              <FaMoon className="text-xl" />
            </button>
          </>
        )) ||
          (theme === "dark" && (
            <>
              <button
                className={`p-2.5 4k:p-4 rounded-full transition-colors duration-300 bg-orange-600 text-gray-200`}
                onClick={() => setTheme("light")}
                aria-label="Switch to light mode"
                title="Switch to light mode"
              >
                <FaSun className="text-xl" />
              </button>
            </>
          ))}
      </div>
    </>
  );
}
