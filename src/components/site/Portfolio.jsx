import SectionHead from './SectionHead';
import { ArrowUpRight } from 'lucide-react';
import { projects, WA_PORTFOLIO } from '@/data/site';

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="03"
          label="Selected work"
          title="Our recent work"
          desc="A selection of websites and digital products we've worked on — across healthcare, retail, education, property and hospitality."
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-card lg:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary/90">
                  {project.stack}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[20px] leading-tight tracking-[-0.02em] transition-colors group-hover:text-primary">
                {project.name}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                {project.desc}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                <span className="truncate font-mono text-[10px] text-muted-foreground/80">
                  {project.url}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Every project above is live. Open any of them to see the real thing.
          </p>
          <a
            href={WA_PORTFOLIO}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 border border-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
          >
            Explore our portfolio
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}