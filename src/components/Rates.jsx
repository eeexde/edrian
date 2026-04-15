// src/components/Rates.jsx
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

const engagements = [
  { label: 'Hourly Rate', price: '$7 / hr' },
  { label: 'Part-Time Ongoing (5–10 hrs/wk)', price: '$7–15 / hr' },
  { label: 'Full-Time Contract (40 hrs/wk)', price: '$1,000–2,000 / mo' },
  { label: 'Project-Based', price: '$500–3,000' },
]

export default function Rates() {
  return (
    <section id="rates" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader number="05" title="Availability & Rates" />

      {/* Status */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
        <p className="text-emerald-400 text-sm font-medium">Currently available for new projects</p>
      </div>

      {/* Engagement models */}
      <GlassCard hover={false} className="mb-6">
        <div className="divide-y divide-white/5">
          {engagements.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <span className="text-white/70 text-sm">{item.label}</span>
              <span className="font-heading font-bold text-cyan-400 text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Timezone + payment */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard hover={false}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Timezone</p>
          <p className="text-white text-sm font-medium">Philippines (PHT · GMT+8)</p>
          <p className="text-white/40 text-xs mt-1">5:00 AM – 2:00 PM PHT</p>
          <p className="text-white/30 text-xs">overlap with PST / AU / Europe</p>
        </GlassCard>

        <GlassCard hover={false}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Payment</p>
          <p className="text-white text-sm font-medium">Wise · PayPal · Bank Transfer</p>
          <p className="text-white/40 text-xs mt-1">International payments accepted</p>
        </GlassCard>

        <GlassCard hover={false}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Status</p>
          <p className="text-white text-sm font-medium">Open to new clients</p>
          <p className="text-white/40 text-xs mt-1">Short & long-term welcome</p>
        </GlassCard>
      </div>
    </section>
  )
}
