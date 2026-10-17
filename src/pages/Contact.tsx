import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Snowflake,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/data';
import { submitBooking } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    area: '',
    message: '',
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      await submitBooking(form);
      setStatus('success');
      setForm({
        name: '',
        phone: '',
        service: SERVICES[0].title,
        area: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  };

  const inputCls =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200';
  const labelCls = 'mb-1.5 block text-sm font-600 text-ink-800';

  const contactItems = [
    {
      icon: Phone,
      label: 'Call us',
      value: COMPANY.phoneDisplay,
      href: `tel:${COMPANY.phone}`,
      accent: 'text-primary-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat 24/7 with our team',
      href: COMPANY.whatsapp,
      accent: 'text-success-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      accent: 'text-accent-600',
    },
    {
      icon: MapPin,
      label: 'Service area',
      value: COMPANY.area,
      href: null,
      accent: 'text-primary-600',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: COMPANY.hours,
      href: null,
      accent: 'text-accent-600',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
              <Snowflake className="h-3.5 w-3.5" />
              Contact Us
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-700 leading-[1.1] tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
              Book your repair in{' '}
              <span className="gradient-text">minutes</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Fill out the form below and our team will contact you to confirm your
              appointment. For urgent repairs, call or WhatsApp us directly — we
              are available 24/7.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            {/* Contact info */}
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-950 to-primary-950 p-8 text-white shadow-xl">
                <h2 className="font-display text-2xl font-700 tracking-tight">
                  Get in touch directly
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Prefer to reach out yourself? We are one call or message away,
                  any time of day or night.
                </p>

                <ul className="mt-8 space-y-5">
                  {contactItems.map((item) => {
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                          <item.icon className={`h-5 w-5 ${item.accent}`} />
                        </div>
                        <div>
                          <p className="text-xs font-600 uppercase tracking-wider text-ink-400">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm font-600 text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block transition-opacity hover:opacity-80"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-10">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-600 text-white">
                      Why book with us?
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success-500" />
                        Free, no-obligation quote
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success-500" />
                        Same-day service available
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success-500" />
                        Service warranty on every repair
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-xl sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-success-50">
                      <CheckCircle2 className="h-9 w-9 text-success-500" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-700 tracking-tight text-ink-900">
                      Booking received!
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-600">
                      Thank you. Our team will contact you shortly to confirm your
                      appointment. For urgent repairs, call us directly at{' '}
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="font-600 text-primary-600"
                      >
                        {COMPANY.phoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-600 text-ink-800 transition-colors hover:border-primary-300 hover:text-primary-700"
                    >
                      Book another repair
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-700 tracking-tight text-ink-900">
                      Request an appointment
                    </h2>
                    <p className="mt-2 text-sm text-ink-600">
                      Tell us what needs fixing. We will get back to you fast.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelCls} htmlFor="name">
                            Full name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={update('name')}
                            placeholder="e.g. Ahmed Al-Sabah"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className={labelCls} htmlFor="phone">
                            Phone number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={update('phone')}
                            placeholder="e.g. +965 9XXX XXXX"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelCls} htmlFor="service">
                            Service needed *
                          </label>
                          <select
                            id="service"
                            required
                            value={form.service}
                            onChange={update('service')}
                            className={inputCls}
                          >
                            {SERVICES.map((s) => (
                              <option key={s.slug} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                            <option value="Other">Other / Not sure</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelCls} htmlFor="area">
                            Area (optional)
                          </label>
                          <input
                            id="area"
                            type="text"
                            value={form.area}
                            onChange={update('area')}
                            placeholder="e.g. Hawalli, Salmiya..."
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelCls} htmlFor="message">
                          Describe the problem (optional)
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="Tell us what is happening with your appliance..."
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-error-500/30 bg-error-500/10 px-4 py-3 text-sm text-error-700">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 px-7 py-3.5 text-sm font-700 text-white shadow-xl shadow-primary-500/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending your request...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Book my repair
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-ink-400">
                        By submitting, you agree to be contacted about your
                        repair request. We never share your details.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map-ish banner */}
      <section className="relative overflow-hidden bg-ink-950 py-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/38096102/pexels-photo-38096102.jpeg?auto=compress&cs=tinysrgb&h=700&w=1600"
            alt="Kuwait City skyline"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 to-ink-950" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-3">
            {[
              { icon: MapPin, title: 'All governorates', text: 'Kuwait City, Hawalli, Farwaniya, Mubarak Al-Kabeer, Ahmadi, Jahra.' },
              { icon: Clock, title: '24/7 service', text: 'Every day of the week, including weekends and public holidays.' },
              { icon: Phone, title: 'Fast response', text: 'Most calls answered within minutes. Same-day dispatch available.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-700 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
