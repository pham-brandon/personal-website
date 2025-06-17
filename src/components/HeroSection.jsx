import { ArrowDown } from "lucide-react"
export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className = "opacity-0 animate-fade-in">Hello👋 My name is</span>
                        <span className = "text-primary opacity-0 animate-fade-in-delay-1 pt-4"> Brandon</span>
                        <span className = "text-gradient opacity-0 ml-2 animate-fade-in-delay-2 pt-4">Pham </span>
                    </h1>
                </div>

                {/* mini description */}
                <p className="text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3 max-2-2xl pt-2">
                    wip
                </p>

                <div className="animate-fade-in-delay-4 opacity-0 pt-5">
                    <a href="#projects" className="button">
                        My Projects 👆
                    </a>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm font-bold text-muted-foreground mb-2">View More</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>


        </section>
    )
}