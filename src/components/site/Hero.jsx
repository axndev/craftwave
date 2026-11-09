const db = globalThis.__B44_DB__ || { auth: { isAuthenticated: async () => false, me: async () => null }, entities: new Proxy({}, { get: () => ({ filter: async () => [], get: async () => null, create: async () => ({}), update: async () => ({}), delete: async () => ({}) }) }), integrations: { Core: { UploadFile: async () => ({ file_url: '' }) } } };

import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { WA_DEFAULT } from '@/data/site';
import HERO_IMAGE from '../../hero-img.avif';

const markers = [
  'Custom designs',
  'Mobile-friendly',
  'Professional development',
  'Direct support',
];

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-border pt-28 lg:pt-32">
      <div className="section-shell grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7 lg:pr-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-primary" aria-hidden />
            <span className="label-mono">Website design &amp; development — Pakistan</span>
          </div>

          <h1 className="mt-7 font-display text-[2.55rem] leading-[0.96] tracking-[-0.035em] sm:text-[3.6rem] lg:text-[4.6rem]">
            Websites that make your business look{' '}
            <span className="text-primary">professional</span> — and bring more
            enquiries.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            We design and develop modern, responsive websites for businesses that
            want to build trust, showcase their services, and reach more customers
            online. Business websites, online stores, or custom web applications —
            we bring your idea to life.
          </p>

          <div className="mt-9 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="label-mono">Starting from</div>
              <div className="mt-1.5 font-display text-[2rem] leading-none tracking-[-0.02em]">
                PKR 15,000
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground"
              >
                Get a free consultation
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {markers.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span className="h-1 w-1 bg-primary/70" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative border border-border bg-card p-2">
            <Image
              src={HERO_IMAGE}
              alt="Laptop on a marble desk displaying a clean, minimal website interface"
              className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
              fittingType="fill"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 border border-white/25 bg-background/75 px-4 py-3 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                Project brief
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                5–10 working days
              </span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-px bg-border">
            {[
              ['10+', 'Projects shipped'],
              ['100%', 'Responsive'],
              ['1:1', 'With the dev'],
            ].map(([value, label]) => (
              <div key={label} className="bg-background px-3 py-4">
                <div className="font-display text-lg tracking-tight">{value}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}