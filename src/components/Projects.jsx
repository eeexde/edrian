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
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <GlassCard className="h-full group-hover:border-cyan-400/30 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">{project.name}</h3>
                <svg className="w-4 h-4 text-white/20 group-hover:text-cyan-400/60 transition-colors duration-200 shrink-0 ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </section>
  )
}
