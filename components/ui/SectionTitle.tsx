interface SectionTitleProps {
  label: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionTitle({
  label,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-14 ${center ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#4f7cff] mb-3 px-3 py-1 rounded-full border border-[#4f7cff]/20 bg-[#4f7cff]/5">
        {label}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[#8a97b0] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}