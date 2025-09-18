import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
    {name: "Home", href: "#"},
    {name: "Projects", href: "#projects"}
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 w-full">
            <nav 
                className={cn(
                    "w-full max-w-6xl transition-all duration-300 border border-border/20 rounded-full bg-background/80 backdrop-blur-lg shadow-sm",
                    isScrolled ? "py-3 px-6" : "py-4 px-8"
                )}
            >
                <div className="w-full flex items-center justify-center md:justify-end space-x-2">
                    {/* Desktop Navbar */}
                    <div className="flex space-x-2">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                bg-black/40 hover:bg-black/50 text-white/90 hover:text-white
                                border-0 backdrop-blur-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                
                {/* Mobile navigation removed - will only show desktop navigation */}
                </div>
            </nav>
        </div>
    );
}