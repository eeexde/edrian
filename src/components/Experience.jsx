// src/components/Experience.jsx
import { experience } from '../data/content.js'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader number="03" title="Experience" />
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent" />

        <div className="space-y-12">
          {experience.map((entry, i) => (
            <div key={i} className="relative pl-12">
              {/* dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full glass border border-cyan-400/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-1">
                {entry.period}
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-0.5">{entry.role}</h3>
              <p className="text-white/40 text-sm mb-4">{entry.company}</p>

              <ul className="space-y-2 mb-4">
                {entry.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2 text-sm text-white/60">
                    <span className="text-cyan-400/50 mt-0.5">▸</span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {entry.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
