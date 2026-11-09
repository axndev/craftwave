import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import ContactPanel from './ContactPanel';
import SectionHead from './SectionHead';
import { serviceOptions, budgetOptions, CONTACT } from '@/data/site';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkjjkogk';

const initialForm = {
  name: '',
  business_name: '',
  email: '',
  whatsapp: '',
  service: serviceOptions[0],
  budget: budgetOptions[0],
  message: '',
};

const fieldClass =
  'w-full border border-border bg-background px-3.5 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('sent');
    } catch (err) {
      setStatus('idle');
      setError('We could not send that. Please message us on WhatsApp instead.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-b border-border">
      <div className="section-shell py-20 lg:py-28">
        <SectionHead
          index="08"
          label="Contact"
          title="Get a free consultation today"
          desc="Share a few details about your business and what you need. We'll reply with the right approach, a timeline, and a clear price."
        />

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <ContactPanel />
          </div>

          <div className="min-w-0 bg-background p-6 sm:p-7 lg:col-span-7 lg:p-10">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-start justify-center py-6">
                <span className="grid h-12 w-12 place-items-center border border-primary/30 bg-primary/5 text-primary">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-[-0.02em]">
                  Thanks, {form.name.split(' ')[0] || 'there'}.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  We've noted your requirements and will get back to you within one
                  working day. Prefer a faster reply? Message us on WhatsApp.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CONTACT.whatsappBase}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    Continue on WhatsApp
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setStatus('idle');
                    }}
                    className="border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="label-mono">Your name *</span>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Full name"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono">Business name</span>
                    <input
                      value={form.business_name}
                      onChange={update('business_name')}
                      placeholder="Company or brand"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono">Email *</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@business.com"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono">WhatsApp number</span>
                    <input
                      value={form.whatsapp}
                      onChange={update('whatsapp')}
                      placeholder="+92 300 0000000"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono">What do you need?</span>
                    <select
                      value={form.service}
                      onChange={update('service')}
                      className={`mt-2 ${fieldClass}`}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="label-mono">Budget range</span>
                    <select
                      value={form.budget}
                      onChange={update('budget')}
                      className={`mt-2 ${fieldClass}`}
                    >
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="label-mono">Tell us about your project *</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="What does your business do, and what should the website achieve?"
                    className={`mt-2 resize-none ${fieldClass}`}
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[12px] leading-relaxed text-muted-foreground">
                    We reply within one working day. Your details stay private.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-primary disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Get my free consultation'}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
                {error && (
                  <p className="text-[12px] font-medium text-destructive">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}