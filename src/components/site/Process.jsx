import SectionHead from './SectionHead';
import { steps } from '@/data/site';

export default function Process() {
    return (
        <section id="process" className="scroll-mt-20 border-b border-border">
            <div className="section-shell py-20 lg:py-28">
                <SectionHead
                    index="06"
                    label="The method"
                    title="How we work"
                    desc="A straightforward process, from first message to launch day — with no surprises along the way."
                />

                <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div key={step.n} className="relative flex flex-col bg-background p-6 lg:p-8">
                            <span className="font-mono text-[11px] tracking-[0.18em] text-primary">
                                {step.n}
                            </span>
                            <div className="mt-6 h-px w-full bg-border" aria-hidden />
                            <h3 className="mt-6 font-display text-[17px] leading-tight tracking-[-0.015em]">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}