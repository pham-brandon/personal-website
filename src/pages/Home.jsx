import { BackgroundEffects } from "../components/BackgroundEffects"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Background Animation */}
            <BackgroundEffects />

            {/* Main Content */}
            <main className="pt-20">
                <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center">
                    <HeroSection />
                </section>
                
                <section id="projects" className="py-20">
                    <ProjectsSection />
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
};