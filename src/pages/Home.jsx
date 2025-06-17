import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
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
            <main>
                <HeroSection />
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4">
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};