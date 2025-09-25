"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">S. Akarshana</h1>
            <p
              className="text-xl md:text-2xl text-primary font-medium mb-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer
            </p>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              I build accessible, pixel-perfect digital experiences using React, Node.js, and modern web technologies.
              Passionate about creating scalable applications with exceptional user experiences.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" className="animate-glow">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
