// src/components/Projects.jsx
import { projects } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="02" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.name}>
            <h3 className="font-heading text-base font-bold text-white mb-2">{project.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
