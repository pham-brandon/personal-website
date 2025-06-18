import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
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
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4">
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};