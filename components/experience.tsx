"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Code } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Best Design Prize",
    description: "Won prize for Best Design in Sobriety – Alcohol Awareness Hackathon",
    category: "Award",
  },
  {
    icon: Code,
    title: "Hackathon Participation",
    description: "Active participant in Prompt Repo Hackathon and Kalvium Labs Hackathons",
    category: "Competition",
  },
  {
    icon: Users,
    title: "Technical Contributions",
    description: "Built multiple full-stack projects and deployed them online (Clyra, Sobriety, Resumify)",
    category: "Development",
  },
]

const interests = [
  "Problem-solving",
  "Design thinking",
  "Real-world impactful applications",
  "Campus engagement",
  "Coding challenges",
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Achievements & Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto animate-slide-up" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Interests & Focus</h3>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <p className="text-muted-foreground mb-6 text-pretty">
                Passionate about creating meaningful digital experiences that solve real-world problems. Active in the
                developer community through hackathons and collaborative projects.
              </p>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Core Interests:</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
