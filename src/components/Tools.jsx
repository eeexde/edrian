// src/components/Tools.jsx
import { toolCategories } from '../data/content.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="04" title="Tools & Platforms" />
      <div className="space-y-8">
        {toolCategories.map((cat) => (
          <div key={cat.category}>
            <p className="text-white/25 text-xs font-medium uppercase tracking-widest mb-3">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-xl text-sm text-white/70 glass glass-hover cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
