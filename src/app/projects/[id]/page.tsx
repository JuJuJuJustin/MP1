"use client"

import { Container } from '@/components/layout/Container'
import { projects } from '@/config/projects'
import { ArrowLeft, HashIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-6 text-base text-muted-foreground">
                {project.fullDescription || project.description}
              </p>
            </header>

            {project.researchAndMarket && project.researchAndMarket.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Research & Market Opportunity</h2>
                <ul className="space-y-4">
                  {project.researchAndMarket.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technicalArchitecture && project.technicalArchitecture.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
                <ul className="space-y-4">
                  {project.technicalArchitecture.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-4">
                  {project.keyFeatures.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.implementationAndUX && project.implementationAndUX.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Implementation & UX/UI</h2>
                <ul className="space-y-4">
                  {project.implementationAndUX.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.futureEnhancements && project.futureEnhancements.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
                <ul className="space-y-4">
                  {project.futureEnhancements.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.benefits && project.benefits.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-4">
                  {project.benefits.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.drawbacks && project.drawbacks.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Drawbacks</h2>
                <ul className="space-y-4">
                  {project.drawbacks.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.workingExample && project.workingExample.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Working Example</h2>
                <ul className="space-y-4">
                  {project.workingExample.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyFindings && project.keyFindings.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
                <ul className="space-y-4">
                  {project.keyFindings.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      <HashIcon className="w-4 h-4" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <div className="mt-8">
                <a
                  href={`https://${project.link.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {project.link.label}
                  <ArrowLeft className="w-4 h-4 rotate-[135deg]" />
                </a>
              </div>
            )}
          </article>
        </div>
      </div>
    </Container>
  )
}
