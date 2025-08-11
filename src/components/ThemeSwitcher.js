"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
    const [ mounted, setMounted ] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (null);
    }

    return (
        <>
            <div className="flex items-center space-x-2">    
                { resolvedTheme === 'light' && (
                    <>
                        <button className={`p-2 3xl:p-3 rounded-lg transition-colors duration-300 bg-blue-800 text-gray-200`}
                                onClick={() => setTheme('dark')}
                                aria-label="Switch to dark mode"
                                title="Switch to dark mode">
                            <FaMoon className="text-lg 3xl:text-4xl"/>
                        </button>
                    </>
                ) || resolvedTheme === 'dark' && (
                    <>
                        <button className={`p-2 3xl:p-3 rounded-lg transition-colors duration-300 bg-orange-600 text-gray-200`}
                                onClick={() => setTheme('light')}
                                aria-label="Switch to light mode"
                                title="Switch to light mode">
                            <FaSun className="text-lg 3xl:text-4xl"/>
                        </button>
                    </>
                )}
            </div>
        </>
    );


}