import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "CashQuest",
        description: "CashQuest is a personal finance Android app that helps users track expenses, set financial goals, and gain insights into their spending habits. With features like receipt scanning, goal tracking, and interactive dashboards, CashQuest empowers users to manage their finances effectively and achieve their savings milestones.",
        image: "/projects/project1.jpg",
        tags: ["Java", "Firebase", "Android SDK"],
        demoUrl: "#",
        githubUrl: "https://github.com/pham-brandon/CashQuest",
    },
    {
        id: 2,
        title: "MockPrep",
        description: "A web app for practicing interviews. Built with React, TypeScript, and Firebase to help people prepare for interviews through practice sessions with feedback.",
        image: "/projects/project2.jpg",
        tags: ["React", "TypeScript", "Firebase"],
        demoUrl: "https://mockprep-app.web.app/",
        githubUrl: "https://github.com/pham-brandon/MockPrep",
    },
    {
        id: 3,
        title: "Research2Slides",
        description: "Developed an application in a group of 5 that converts research papers (PDF) into summarized, presentation-ready PowerPoint slides using Java, Spring Boot, Apache PDFBox, and Apache POI.",
        image: "/projects/project3.jpg",
        tags: ["Java", "Spring Boot", "Apache PDFBox", "Apache POI"],
        demoUrl: "#",
        githubUrl: "https://github.com/pham-brandon/Research2SlidesWebApp",
    },
    {
        id: 4,
        title: "Canadian Workforce Analytics Dashboard",
        description: "Interactive data visualization dashboard built with Dash and Plotly, showcasing key 2023 Canadian workforce and demographic trends across provinces and territories. Includes insights on employment, industry sectors, and population statistics.",
        image: "/projects/project4.jpg",
        tags: ["Python", "Dash", "Plotly", "Pandas"],
        demoUrl: "#",
        githubUrl: "https://github.com/pham-brandon/Canadian-Workforce-Analytics-Dashboard",
    },
    {
        id: 5,
        title: "Personal Website",
        description: "A modern, responsive personal portfolio website built with React and Vite, showcasing my projects, skills, and experience. Features a clean, minimalist design with smooth animations and a mobile-first approach for optimal viewing across all devices.",
        image: "/projects/project5.jpg",
        tags: ["React", "Vite", "Tailwind CSS", "React Router"],
        demoUrl: "https://brandonpham.dev",
        githubUrl: "https://github.com/pham-brandon/personal-website",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="pt-32 -mt-20">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.slice(0, 4).map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                            <div className="h-52 overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                    <span className="text-muted-foreground/30 text-4xl">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                                    {project.description || 'Project description coming soon...'}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                    {project.tags.filter(tag => tag).map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-4">
                                    <div className="flex flex-wrap gap-3">
                                        {project.githubUrl && project.githubUrl !== '#' && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center bg-white hover:bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-200"
                                            >
                                                <GithubIcon size={16} className="mr-2" />
                                                View the project
                                            </a>
                                        )}
                                        {project.demoUrl && project.demoUrl !== '#' && (
                                            <a 
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                                            >
                                                <ExternalLink size={16} className="mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Fifth Project - Centered below the grid */}
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-full max-w-2xl group relative overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                            <div className="h-52 overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                    <span className="text-muted-foreground/30 text-4xl">
                                        {projects[4].title.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-foreground">{projects[4].title}</h3>
                                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                                    {projects[4].description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                    {projects[4].tags.filter(tag => tag).map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-4">
                                    <div className="flex flex-wrap gap-3">
                                        {projects[4].githubUrl && projects[4].githubUrl !== '#' && (
                                            <a 
                                                href={projects[4].githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center bg-white hover:bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-200"
                                            >
                                                <GithubIcon size={16} className="mr-2" />
                                                View the project
                                            </a>
                                        )}
                                        {projects[4].demoUrl && projects[4].demoUrl !== '#' && (
                                            <a 
                                                href={projects[4].demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                                            >
                                                <ExternalLink size={16} className="mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a 
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/pham-brandon"
                    >
                        View All Projects <ArrowRight className="ml-2" size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}