import SectionHead from './SectionHead';
import { services } from '@/data/site';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="02"
          label="Capabilities"
          title="What we can build for you"
          desc="Every project starts with your business, your audience and the result you need — then we choose the right platform to deliver it."
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col bg-background p-6 transition-colors hover:bg-card lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-border text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-xl tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-border/80 pt-4">
                  <span className="h-1 w-1 bg-primary/70" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {service.spec}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}