// src/components/Rates.jsx
import { rates } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Rates() {
  return (
    <section id="rates" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="05" title="Availability & Rates" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {rates.map((plan) => (
          <GlassCard
            key={plan.name}
            className={plan.highlight ? 'border-cyan-400/30 shadow-[0_0_30px_rgba(0,212,255,0.08)]' : ''}
          >
            {plan.highlight && (
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-widest mb-4">
                Most Popular
              </p>
            )}
            <h3 className="font-heading text-xl font-bold text-white mb-1">{plan.name}</h3>
            <p className="font-heading text-3xl font-bold text-cyan-400 mb-1">{plan.price}</p>
            <p className="text-white/30 text-sm mb-4">{plan.monthly}</p>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-white/60">
                  <span className="text-cyan-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Timezone + payment */}
      <GlassCard hover={false}>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Timezone</p>
            <p className="text-white font-medium">PHT — GMT+8 (Philippines)</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Payment Methods</p>
            <p className="text-white font-medium">PayPal · Wise · GCash · Crypto</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Availability</p>
            <p className="text-white font-medium">Open to new clients</p>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
