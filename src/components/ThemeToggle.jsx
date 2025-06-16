import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    
    return (
        <button 
            onClick={toggleTheme} 
            className="fixed top-4 right-4 z-50 p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        > 
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/> 
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
};