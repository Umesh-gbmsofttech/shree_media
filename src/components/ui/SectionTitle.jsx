export default function SectionTitle({ eyebrow, title, subtitle, titleClassName = '' }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className={`mt-3 font-display text-3xl font-bold tracking-tight text-secondary sm:text-4xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-secondary/70">{subtitle}</p> : null}
    </div>
  )
}
