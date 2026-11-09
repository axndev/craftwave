export default function SectionHead({ index, label, title, desc, light = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-[11px] tracking-[0.2em] ${light ? 'text-white/50' : 'text-primary'
              }`}
          >
            {index}
          </span>
          <span
            className={`h-px w-8 ${light ? 'bg-white/20' : 'bg-border'}`}
            aria-hidden
          />
          <span className={`label-mono ${light ? 'text-white/50' : ''}`}>{label}</span>
        </div>
        <h2
          className={`mt-4 font-display text-3xl leading-[1.02] tracking-[-0.03em] sm:text-4xl lg:text-[3.4rem] ${light ? 'text-white' : ''
            }`}
        >
          {title}
        </h2>
      </div>
      {desc && (
        <div className="md:col-span-5 md:pb-2">
          <p
            className={`max-w-md text-base leading-relaxed sm:text-[17px] ${light ? 'text-white/60' : 'text-muted-foreground'
              }`}
          >
            {desc}
          </p>
        </div>
      )}
    </div>
  );
}