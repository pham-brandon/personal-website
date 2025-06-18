import { useState } from "react"

const skills = [
    // frontend
    {name: "HTML/CSS", level: 95, category: "frontend"},
    // backend
    {name: "SQL", level: 92, category: "backend"},
    // tools
    {name: "VS Code", level: 92, category: "tools"}
]

const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" }
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = activeCategory === "all" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory)

    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                                activeCategory === category.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/50 hover:bg-secondary/70"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out" 
                                    style={{width: `${skill.level}%`}}
                                /> 
                            </div>
                            <div className="text-right mt-1"> 
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    )
}