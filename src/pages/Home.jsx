import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle (Dark/Light) */}
            <ThemeToggle/>

            {/* Navbar */}
            <Navbar />

            {/* Background Animation */}
            <BackgroundEffects />

            {/* Main Section */}
            <main className="container mx-auto px-4 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                        Brandon Pham
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in-delay-1">
                        Software Engineer
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4">
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};