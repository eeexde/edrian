// src/components/Nav.jsx
export default function Nav() {
  const links = ['Skills', 'Projects', 'Experience', 'Tools', 'Rates', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-bold text-white text-lg tracking-tight">
          Edrian<span className="text-cyan-400">.</span>
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-cyan-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
