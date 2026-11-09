import { CONTACT } from '@/data/site';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-foreground font-display text-[13px] font-semibold text-background">
              CW
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold">Craftwave</span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                Digital
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
            Websites that make your business look professional and bring more
            enquiries. Building better digital experiences.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="label-mono">Navigate</div>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] text-foreground/75 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="label-mono">Get in touch</div>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li>
              <a
                href={CONTACT.whatsappBase}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground/75 transition-colors hover:text-primary"
              >
                WhatsApp — {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground/75 transition-colors hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="text-foreground/50">{CONTACT.website}</li>
          </ul>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Projects from PKR 15,000
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            © 2026 Craftwave Digital. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Craftwave Digital — Building better digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}