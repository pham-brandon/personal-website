import { Code } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="px-4 py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className ="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className=""space-y-6>
                        <h3 className="text-2xl font-semibold">Computer Science Graduate</h3>
                        <p className="text-muted-foreground"> wip </p>
                        <p className="text-muted-foreground"> wip </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a className="button" href="#contact"> Contact Me! 📧 </a>
                            <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" href="#resume"> Resume 📄 </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> placeholder</h4>
                                    <p className="text-muted-foreground"> placeholder description</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> placeholder</h4>
                                    <p className="text-muted-foreground"> placeholder description</p>
                                </div>
                            </div></div>
                            

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> placeholder</h4>
                                    <p className="text-muted-foreground"> placeholder description</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    )
}