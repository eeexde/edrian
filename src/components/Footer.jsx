// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 py-10 px-6 text-center"
    >
      <p className="text-white/30 text-sm mb-3">
        © {new Date().getFullYear()} Edrian Pasaylo. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-6">
        <a
          href="mailto:edrianpasaylo@gmail.com"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/edrian-pasaylo"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/edrian"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
