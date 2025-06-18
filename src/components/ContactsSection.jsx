import { Linkedin, Mail, MapPin } from "lucide-react"
import { Phone } from "lucide-react"
import { cn } from "../lib/utils"
import { Send } from "lucide-react"
export const ContactSection = () => {
    return <section id ="contact"className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Contact And <span className="text-primary">Connect</span> With Me!
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a question or want to work together? Feel free to reach out!
            </p>

            <div className="flex justify-center">
                <div className="space-y-8 bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="text-primary h-6 w-6"></Mail>
                            </div>
                            <div>
                                <h4 className="font-medium text-left">Email</h4>
                                <a href="mailto:pham-brandon@outlook.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    pham-brandon@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="text-primary h-6 w-6"></Phone>
                            </div>
                            <div>
                                <h4 className="font-medium text-left">Phone</h4>
                                <a href="tel:+12345678"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    12345678
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10"
                            href="https://www.linkedin.com/in/pham-brandon2/">
                                <Linkedin className="text-primary h-6 w-6"></Linkedin>
                            </div>
                            <div>
                                <h4 className="font-medium text-left">LinkedIn</h4>
                                <a
                                href="https://www.linkedin.com/in/pham-brandon2/" target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    in/pham-brandon2
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="text-primary h-6 w-6"></MapPin>
                            </div>
                            <div>
                                <h4 className="font-medium text-left">Location</h4>
                                <a
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    Mississauga, ON, Canada
                                </a>
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
        </div>
    </section>
}