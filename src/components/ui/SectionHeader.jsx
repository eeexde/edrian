// src/components/ui/SectionHeader.jsx
export default function SectionHeader({ number, title }) {
  return (
    <div className="mb-12">
      <span className="font-heading text-7xl font-bold text-white/5 select-none leading-none">
        {number}
      </span>
      <h2 className="font-heading text-3xl font-bold text-white -mt-6">
        {title}
      </h2>
    </div>
  )
}
