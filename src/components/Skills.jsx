// src/components/Skills.jsx
import { skills } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="01" title="Core Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <GlassCard key={skill.name}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{skill.icon}</span>
              <Badge>{skill.level}</Badge>
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">{skill.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{skill.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
