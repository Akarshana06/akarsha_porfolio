"use client"

import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto animate-slide-up" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Statement</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                I am a Full-Stack Developer skilled in building end-to-end applications using React, Node.js,
                Express.js, MongoDB, and SQL. My technical strengths lie in creating scalable web applications with a
                focus on usability and performance.
              </p>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Kalvium's UG Program in CS</h4>
                  <p className="text-sm text-muted-foreground">Software Product Engineering</p>
                  <p className="text-sm text-muted-foreground">2024 – Present</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">BCA, University of Mysore</h4>
                  <p className="text-sm text-muted-foreground">Online Program</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
