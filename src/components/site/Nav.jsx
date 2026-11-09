import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CONTACT, WA_DEFAULT } from '@/data/site';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
        }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" className="group flex items-center gap-3" aria-label="Craftwave Digital home">
          <span className="grid h-9 w-9 place-items-center border border-foreground/15 bg-foreground font-display text-[13px] font-semibold text-background transition-colors group-hover:bg-primary">
            CW
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-[-0.01em]">
              Craftwave
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
              Digital
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground xl:inline"
          >
            {CONTACT.email}
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-primary hover:border-primary"
          >
            Get a quote
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center border border-border bg-background text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="section-shell flex flex-col py-2" aria-label="Mobile sections">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-lg tracking-tight last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer noopener"
              className="my-4 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground"
            >
              Chat on WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}