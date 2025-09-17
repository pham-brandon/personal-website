import { Linkedin, Mail, MapPin } from "lucide-react"
import { Phone } from "lucide-react"
import { cn } from "../lib/utils"
import { Send } from "lucide-react"
export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to chat? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 bg-card p-8 rounded-xl border border-border/40 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of these channels. I'll get back to you as soon as possible!
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Mail className="text-primary h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Email</h4>
                                    <a 
                                        href="mailto:pham-brandon@outlook.com"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        pham-brandon@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Phone className="text-primary h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Phone</h4>
                                    <a 
                                        href="tel:+12345678"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        +1 (234) 567-8901
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Linkedin className="text-primary h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/pham-brandon2/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        in/pham-brandon2
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <MapPin className="text-primary h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Location</h4>
                                    <div className="text-muted-foreground text-sm">
                                        Mississauga, ON, Canada
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="john-doe@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Send a message..."
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="button w-full flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={16}/>
                            </button>
                        </form>

                    </div>
                    */}

                </div>
            </div>
        </section>
    )
}