// src/components/Hero.jsx
import { ParticlesBackground } from './ui/particles.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticlesBackground />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-6">
          Freelance No-Code Developer
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white glow-text leading-tight mb-6">
          Edrian Pasaylo
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable digital solutions without traditional code — faster, leaner, and more powerful than ever.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-10">
          <div className="text-center">
            <p className="font-heading text-3xl font-bold text-cyan-400">70%</p>
            <p className="text-white/40 text-sm mt-1">Manual work reduced</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="font-heading text-3xl font-bold text-cyan-400">15+</p>
            <p className="text-white/40 text-sm mt-1">Hrs saved / client / week</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl glass glass-hover text-white font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
    </section>
  )
}
