import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHead from './SectionHead';
import { faqs, WA_DEFAULT } from '@/data/site';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHead
              index="07"
              label="Questions"
              title="Frequently asked questions"
            />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Still unsure about something? Message us directly — you'll be talking to
              the person who builds your website.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
            >
              Ask a question
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="flex min-w-0 gap-4">
                        <span className="mt-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-[16px] leading-snug tracking-[-0.01em] sm:text-[17px]">
                          {item.q}
                        </span>
                      </span>
                      <Plus
                        className={`mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'group-hover:text-foreground'
                          }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="min-h-0">
                        <p className="pb-6 pl-9 pr-8 text-[14.5px] leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}