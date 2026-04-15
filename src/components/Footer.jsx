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
          href="mailto:pasaylo.ed03@gmail.com"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="https://www.onlinejobs.ph/jobseekers/info/4228054"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          OnlineJobs.ph
        </a>
      </div>
    </footer>
  )
}
