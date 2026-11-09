import SectionHead from './SectionHead';
import { whyWebsite } from '@/data/site';

export default function WhyWebsite() {
  return (
    <section className="border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="01"
          label="The problem"
          title="Your business deserves more than just a social media page"
          desc="Potential customers often check your business online before contacting you. If they can't find a professional website, you could be missing opportunities to:"
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {whyWebsite.map((item, i) => (
            <div
              key={item}
              className="group flex flex-col justify-between gap-8 bg-background p-6 transition-colors hover:bg-card sm:last:col-span-2 lg:p-7 lg:last:col-span-1"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[15px] leading-snug tracking-[-0.01em] text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-l-2 border-primary pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-lg tracking-[-0.015em] sm:text-xl">
            Let's build a website that represents your business professionally.
          </p>
          <a
            href="#services"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary underline-offset-4 hover:underline"
          >
            See what we build →
          </a>
        </div>
      </div>
    </section>
  );
}