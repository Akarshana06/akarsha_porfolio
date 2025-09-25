"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Award } from "lucide-react"

const projects = [
  {
    title: "Clyra – Digital Time Capsule",
    description:
      "Built and deployed a full-stack digital time capsule platform enabling users to store and retrieve memories.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
    features: [
      "Full-stack digital time capsule platform",
      "Memory storage and retrieval system",
      "Deployed on Render & Netlify",
      "Optimized frontend-backend communication",
    ],
    impact: "Successfully deployed and accessible for real users",
    links: {
      github: "#",
      render: "#",
      netlify: "#",
    },
  },
  {
    title: "Sobriety – Alcohol Rehabilitation & Awareness",
    description: "Designed and developed an awareness platform supporting alcohol rehabilitation.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Awareness platform for alcohol rehabilitation",
      "User-friendly interface for sensitive issues",
      "Digital support system",
      "Award-winning design",
    ],
    impact: "Awarded Best Design Prize in a hackathon",
    award: true,
    links: {
      github: "#",
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto animate-slide-up" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground text-balance">{project.title}</h3>
                {project.award && <Award className="h-5 w-5 text-primary flex-shrink-0 ml-2" />}
              </div>

              <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-primary mb-2">Impact: {project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.links.render && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.render} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Render
                    </a>
                  </Button>
                )}
                {project.links.netlify && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.netlify} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Netlify
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
