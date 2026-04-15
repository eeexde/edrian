// src/components/ui/Badge.jsx
export default function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
      {children}
    </span>
  )
}
