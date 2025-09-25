"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto animate-slide-up" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto text-pretty">
            I'm always interested in discussing new opportunities, collaborating on projects, or just having a
            conversation about technology and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                  from you. Let's build something amazing together!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Coimbatore, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="https:akarshana027@gmail.com" className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a
                      href="https://www.linkedin.com/in/akarshana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a
                      href="https://github.com/Akarshana06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Github className="h-5 w-5" />
                      Follow on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-sm text-muted-foreground">© 2025 S. Akarshana. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
