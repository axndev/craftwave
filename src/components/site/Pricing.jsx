import SectionHead from './SectionHead';
import { Check, ArrowUpRight } from 'lucide-react';
import { pricing, WA_QUOTE } from '@/data/site';

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="05"
          label="Investment"
          title="Simple & transparent pricing"
          desc="You'll know the project scope and cost before development begins. Final pricing depends on design, functionality and content."
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-6 lg:p-7 ${tier.featured ? 'bg-card text-foreground' : 'bg-background'
                }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[17px] tracking-[-0.01em]">{tier.name}</h3>
                {tier.featured && (
                  <span className="border border-white/25 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70">
                    Popular
                  </span>
                )}
              </div>

              <div
                className={`mt-5 font-display text-[22px] leading-tight tracking-[-0.02em] ${tier.featured ? 'text-white' : ''
                  }`}
              >
                {tier.price}
              </div>
              <p
                className={`mt-3 text-[14px] leading-relaxed ${tier.featured ? 'text-white/55' : 'text-muted-foreground'
                  }`}
              >
                {tier.desc}
              </p>

              {tier.features.length > 0 ? (
                <ul
                  className={`mt-6 space-y-2.5 border-t pt-6 ${tier.featured ? 'border-white/15' : 'border-border'
                    }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${tier.featured ? 'text-primary' : 'text-primary'
                          }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-[13.5px] leading-snug ${tier.featured ? 'text-white/75' : 'text-foreground/80'
                          }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`mt-6 border-t border-white/15 pt-6 text-[13.5px] leading-relaxed ${tier.featured ? 'text-white/60' : 'text-muted-foreground'
                    }`}
                >
                  Tell us what you need and we'll scope it with you — from booking
                  systems and dashboards to advanced third-party integrations.
                </p>
              )}

              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noreferrer noopener"
                className={`group mt-7 inline-flex items-center justify-between gap-3 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${tier.featured
                    ? 'bg-primary text-primary-foreground hover:bg-foreground hover:text-background'
                    : 'border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background'
                  }`}
              >
                {tier.cta}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
            Domain, hosting, premium licences, and third-party services are quoted
            separately where applicable.
          </p>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary underline-offset-4 hover:underline"
          >
            Get your website quote →
          </a>
        </div>
      </div>
    </section>
  );
}