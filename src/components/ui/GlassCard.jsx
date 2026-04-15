// src/components/ui/GlassCard.jsx
import clsx from 'clsx'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={clsx(
        'glass rounded-2xl p-6',
        hover && 'glass-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
