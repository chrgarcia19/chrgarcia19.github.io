"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (null);
    }

    return (
        <>
         <div className="flex items-center space-x-2">
            {theme === 'light' && (
                <>
                    <button className={`p-2 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-blue-800 text-gray-200'}`}
                            onClick={() => setTheme('dark')}>
                        <FaMoon className="text-lg"/>
                    </button>
                </>
            ) || theme === 'dark' && (
                <>
                    <button className={`p-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-orange-600 text-gray-200'}`}
                            onClick={() => setTheme('light')}>
                        <FaSun className="text-lg"/>
                    </button>
                </>
            )}
        </div>
        </>
    );


}