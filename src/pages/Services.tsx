import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Snowflake,
  ShieldCheck,
  Clock,
  Wrench,
} from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/data';
import Reveal from '@/components/Reveal';
import { SectionHeading } from '@/components/Section';
import DynamicIcon from '@/components/DynamicIcon';
import { useRouter } from '@/lib/router';

const FAQS = [
  {
    q: 'Do you offer same-day repair service in Kuwait?',
    a: 'Yes. Most bookings are handled the same day, often within a few hours. For emergency AC failures during summer, we prioritize rapid dispatch across all governorates.',
  },
  {
    q: 'Which areas of Kuwait do you cover?',
    a: 'We serve every governorate — Al Asimah (Kuwait City), Hawalli, Farwaniya, Mubarak Al-Kabeer, Ahmadi, and Jahra. If you are in Kuwait, we can reach you.',
  },
  {
    q: 'What brands do you repair?',
    a: 'All major brands including Daikin, LG, Samsung, Panasonic, Midea, Whirlpool, Carrier, Hitachi, Bosch, and more — for ACs, washing machines, and refrigerators.',
  },
  {
    q: 'Do you provide a warranty on repairs?',
    a: 'Yes. Our repairs are backed by a service warranty, and we use genuine spare parts so the fix lasts. If the same issue recurs within the warranty period, we return at no extra charge.',
  },
  {
    q: 'How much will my repair cost?',
    a: 'Pricing is transparent and up-front. After a quick diagnosis, our technician gives you a clear quote before any work begins — no hidden fees, no surprises.',
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes. We operate around the clock, every day of the week, including weekends and public holidays, for both scheduled and emergency repairs.',
  },
];

export default function Services() {
  const { navigate } = useRouter();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
              <Snowflake className="h-3.5 w-3.5" />
              Our Services
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-700 leading-[1.1] tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
              Complete repair services for{' '}
              <span className="gradient-text">every appliance</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Expert repair, maintenance, and installation for AC systems, washing
              machines, and refrigerators — delivered by certified technicians
              using genuine parts across all of Kuwait.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8">
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    reversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={reversed ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl object-cover shadow-2xl"
                      />
                      <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-ink-100">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                          <DynamicIcon
                            name={service.icon}
                            className="h-6 w-6 text-white"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-600 uppercase tracking-wider text-ink-400">
                            {service.title}
                          </p>
                          <p className="text-sm font-700 text-ink-900">
                            Same-day service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-600 uppercase tracking-[0.14em] text-primary-700 ring-1 ring-primary-200">
                      0{i + 1} · Service
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-700 leading-tight tracking-tight text-ink-900 sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm font-500 text-ink-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={COMPANY.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-success-500 to-accent-500 px-6 py-3 text-sm font-600 text-white shadow-lg shadow-success-500/25 transition-transform hover:scale-[1.03]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Book this service
                      </a>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-600 text-ink-800 transition-colors hover:border-primary-300 hover:text-primary-700"
                      >
                        <Phone className="h-4 w-4 text-primary-600" />
                        Call now
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-ink-950 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-700 tracking-tight text-white sm:text-3xl">
              What you can always expect
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Genuine parts, real warranty',
                text: 'We only use original spare parts and back every repair with a service warranty.',
              },
              {
                icon: Clock,
                title: '24/7 availability',
                text: 'Round-the-clock service every day — scheduled visits and emergency calls alike.',
              },
              {
                icon: Wrench,
                title: 'All brands & systems',
                text: 'Split, central, front-load, top-load, no-frost — we repair them all, expertly.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <item.icon className="h-8 w-8 text-accent-300" />
                  <h3 className="mt-4 font-display text-lg font-700 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions, <span className="text-primary-600">answered</span>
                </>
              }
              subtitle="Everything you need to know before booking a repair with us."
            />
          </Reveal>
          <div className="mt-12 space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="group rounded-2xl border border-ink-200 bg-white p-5 shadow-sm transition-all open:border-primary-300 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-600 text-ink-900">
                      {faq.q}
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-ink-950 py-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-700 leading-tight tracking-tight text-white text-balance sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-ink-200">
              Tell us what is happening with your appliance and we will guide you
              to the right solution — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-700 text-primary-800 shadow-xl transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5 text-success-600" />
                WhatsApp Us
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-600 text-white transition-colors hover:bg-white/10"
              >
                Book appointment
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
