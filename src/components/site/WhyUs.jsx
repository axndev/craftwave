import SectionHead from './SectionHead';
import { Image } from '@/components/ui/image';
import { whyUs } from '@/data/site';

const STRUCTURE_IMAGE =
  'https://media.base44.com/images/public/6aea2cf6b936ea99cd984751/6485009e4_generated_1c35d5e3.png';

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 border-b border-border bg-card">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="04"
          label="Why Craftwave"
          title="Why choose Craftwave Digital?"
          desc="You work directly with the developer who builds your website — clear scope, honest timelines, and support after launch."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="mx-auto w-full max-w-md lg:col-span-4 lg:max-w-none">
            <div className="border border-border p-2">
              <Image
                src={STRUCTURE_IMAGE}
                alt="Abstract frosted glass and aluminium architectural forms in cobalt light"
                className="aspect-square w-full"
                fittingType="fill"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-px bg-border">
              {[
                ['15,000+', 'PKR starting point'],
                ['5–10', 'Working days'],
              ].map(([value, label]) => (
                <div key={label} className="bg-card px-4 py-4">
                  <div className="font-display text-xl tracking-tight text-foreground">{value}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card p-6 lg:p-7">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-[17px] tracking-[-0.01em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}