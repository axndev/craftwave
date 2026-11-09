import { MessageCircle, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { CONTACT, WA_DEFAULT } from '@/data/site';

export default function ContactPanel() {
  return (
    <div className="bg-card p-6 text-foreground sm:p-8 lg:p-12">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-primary" aria-hidden />
        <span className="label-mono text-white/50">Start a project</span>
      </div>

      <h2 className="mt-6 font-display text-[2rem] leading-[1.03] tracking-[-0.03em] text-white sm:text-[2.5rem]">
        Let's build something great for your business.
      </h2>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
        Ready to take your business online? Tell us what you need, and we'll help you
        find the right website solution within your budget.
      </p>

      <div className="mt-9 space-y-px bg-white/15">
        <a
          href={CONTACT.whatsappBase}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center justify-between gap-4 bg-card px-4 py-4 transition-colors hover:bg-white/5"
        >
          <span className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-white/50" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
              WhatsApp
            </span>
          </span>
          <span className="flex items-center gap-2 text-[14px] text-white">
            {CONTACT.whatsappDisplay}
            <ArrowUpRight className="h-3.5 w-3.5 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="group flex items-center justify-between gap-4 bg-card px-4 py-4 transition-colors hover:bg-white/5"
        >
          <span className="flex shrink-0 items-center gap-3">
            <Mail className="h-4 w-4 text-white/50" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
              Email
            </span>
          </span>
          <span className="min-w-0 truncate text-[14px] text-white">{CONTACT.email}</span>
        </a>
        <div className="flex items-center justify-between gap-4 bg-card px-4 py-4">
          <span className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-white/50" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
              Website
            </span>
          </span>
          <span className="text-[14px] text-white">{CONTACT.website}</span>
        </div>
      </div>

      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        <MessageCircle className="h-4 w-4" />
        Chat with us on WhatsApp
      </a>
    </div>
  );
}