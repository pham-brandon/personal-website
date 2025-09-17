import { Github, Linkedin } from "lucide-react"

export const HeroSection = () => {
    return (
        <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-primary font-medium opacity-0 animate-fade-in">
                            Hello, I'm
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                            <span className="text-foreground opacity-0 animate-fade-in-delay-1">Brandon </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2">Pham</span>
                        </h1>
                        <div className="h-1 w-20 bg-primary mx-auto mt-6 opacity-0 animate-fade-in-delay-3"></div>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-4 leading-relaxed">
                    Software Developer passionate about solving problems with code.
                    </p>

                    <div className="pt-8 opacity-0 animate-fade-in-delay-5">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://github.com/pham-brandon" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full bg-white text-black border border-gray-200 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 group"
                            >
                                <Github className="h-5 w-5 mr-2" />
                                GitHub
                            </a>
                            <a 
                                href="https://linkedin.com/in/pham-brandon2" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full bg-[#0066C8] text-white hover:bg-[#0055A3] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Linkedin className="h-5 w-5 mr-2" />
                                LinkedIn
                            </a>
                        </div>
                        <div className="mt-8 opacity-0 animate-fade-in-delay-6">
                            <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm hover:bg-accent/30 transition-all duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <a 
                                    href="mailto:pham-brandon@outlook.com" 
                                    className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
                                >
                                    pham-brandon@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}