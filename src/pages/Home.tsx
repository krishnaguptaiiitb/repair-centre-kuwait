import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Sparkles,
  Quote,
  Thermometer,
  Snowflake,
  Wind,
  WashingMachine,
  Refrigerator,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { COMPANY, SERVICES, TESTIMONIALS, STATS, STEPS } from '@/lib/data';
import { useCountUp } from '@/lib/useCountUp';
import Reveal from '@/components/Reveal';
import { SectionHeading } from '@/components/Section';
import BrandMarquee from '@/components/BrandMarquee';
import DynamicIcon from '@/components/DynamicIcon';

function StatItem({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix: string;
}) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-700 tracking-tight text-white sm:text-5xl">
        <span ref={ref}>{animated.toLocaleString()}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-500 uppercase tracking-wider text-ink-400">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  const { navigate } = useRouter();
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative isolate overflow-hidden bg-ink-950 pt-28 sm:pt-32">
        {/* Background image + overlays */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="AC technician at work"
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              heroLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/85 to-ink-950" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: copy */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
                </span>
                24/7 Emergency Service Across Kuwait
              </span>

              <h1 className="mt-6 font-display text-4xl font-700 leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                Fast & Reliable{' '}
                <span className="gradient-text">AC & Appliance Repair</span>{' '}
                in Kuwait
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
                Expert repair, maintenance, and installation for AC systems,
                washing machines, and refrigerators. Certified technicians,
                same-day response, fair and transparent pricing — anywhere in
                Kuwait.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-success-500 to-accent-500 px-6 py-3.5 text-sm font-600 text-white shadow-xl shadow-success-500/25 transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-600 text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-accent-300" />
                  {COMPANY.phoneDisplay}
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-success-500" />
                  Service warranty
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-accent-400" />
                  Same-day response
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent-400" />
                  All Kuwait governorates
                </span>
              </div>
            </div>

            {/* Right: floating glass card */}
            <div className="relative animate-scale-in lg:pl-6">
              <div className="glass relative rounded-3xl p-6 shadow-2xl">
                <div className="absolute -top-3 -left-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-1 text-[11px] font-700 uppercase tracking-wider text-white shadow-lg">
                  Trusted since 2013
                </div>
                <img
                  src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Technician repairing an air conditioner"
                  className="h-60 w-full rounded-2xl object-cover"
                />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { icon: Wind, label: 'AC Repair' },
                    { icon: WashingMachine, label: 'Washing' },
                    { icon: Refrigerator, label: 'Fridge' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                    >
                      <item.icon className="mx-auto h-5 w-5 text-accent-300" />
                      <p className="mt-1.5 text-[11px] font-500 text-ink-200">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating rating badge */}
              <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl bg-white p-4 shadow-2xl">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-warning-500 text-warning-500"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs font-600 text-ink-900">
                  4.9/5 · 300+ Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand marquee */}
        <div className="border-t border-white/10 bg-ink-950/80">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
            <p className="mb-2 text-center text-xs font-500 uppercase tracking-[0.2em] text-ink-400">
              We service all major brands
            </p>
            <BrandMarquee />
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title={
                <>
                  Professional repair for every{' '}
                  <span className="text-primary-600">home appliance</span>
                </>
              }
              subtitle="From cooling failures to laundry breakdowns, our certified technicians deliver fast, lasting repairs for all major brands across Kuwait."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 120}>
                <button
                  onClick={() => navigate('/services')}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/90 shadow-lg backdrop-blur">
                      <DynamicIcon
                        name={service.icon}
                        className="h-5 w-5 text-primary-700"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-700 tracking-tight text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent-500/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              light
              eyebrow="How It Works"
              title={
                <>
                  Getting your repair done is{' '}
                  <span className="gradient-text">simple</span>
                </>
              }
              subtitle="Four straightforward steps from first call to a fully working appliance — no hassle, no surprises."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-accent-400/40 hover:bg-white/[0.07]">
                  <span className="absolute right-5 top-5 font-display text-5xl font-700 text-white/5 transition-colors group-hover:text-accent-400/15">
                    0{i + 1}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/20">
                    <DynamicIcon
                      name={step.icon}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-700 text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-ink-950 py-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-accent-500/20 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <Reveal key={stat.label}>
                <StatItem
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
                  alt="HVAC technician inspecting an outdoor unit"
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-4 max-w-[220px] rounded-2xl bg-ink-950 p-5 text-white shadow-2xl sm:-right-6">
                  <Thermometer className="h-7 w-7 text-accent-400" />
                  <p className="mt-2 text-sm font-600 leading-snug">
                    48°C summers? Your AC stays cool with our maintenance plans.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <SectionHeading
                  center={false}
                  eyebrow="Why Choose Us"
                  title={
                    <>
                      Reliable repair services you{' '}
                      <span className="text-primary-600">can trust</span>
                    </>
                  }
                  subtitle="Our team of skilled technicians is committed to delivering fast, reliable, and professional repair services across Kuwait — ensuring long-lasting performance and complete customer satisfaction."
                />

                <ul className="mt-7 space-y-3.5">
                  {[
                    'Certified, experienced technicians',
                    'Fast & reliable same-day service',
                    'Affordable, transparent, up-front pricing',
                    'Genuine parts with service warranty',
                    'All major brands and systems supported',
                    '24/7 emergency availability',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-500" />
                      <span className="text-sm font-500 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-600 text-white transition-transform hover:scale-[1.03]"
                  >
                    <Sparkles className="h-4 w-4 text-accent-300" />
                    Get a free quote
                  </a>
                  <button
                    onClick={() => navigate('/about')}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-600 text-ink-800 transition-colors hover:border-primary-300 hover:text-primary-700"
                  >
                    Learn more about us
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-50" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title={
                <>
                  What people in Kuwait{' '}
                  <span className="text-primary-600">say about us</span>
                </>
              }
              subtitle="We take pride in delivering reliable repair services. Our customers trust us for fast response, professional work, and long-lasting solutions."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <Quote className="h-8 w-8 text-primary-200" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                    "{t.text}"
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-700 text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <figcaption className="text-sm font-600 text-ink-900">
                        {t.name}
                      </figcaption>
                      <div className="mt-0.5 flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-3.5 w-3.5 fill-warning-500 text-warning-500"
                          />
                        ))}
                        <span className="ml-1 text-[11px] font-500 text-ink-400">
                          Google
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/3414922/pexels-photo-3414922.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Kuwait City skyline"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
              <Snowflake className="h-3.5 w-3.5" />
              Ready when you need us
            </span>
            <h2 className="mt-6 font-display text-3xl font-700 leading-tight tracking-tight text-white text-balance sm:text-5xl">
              Book your repair today and get your{' '}
              <span className="gradient-text">home running smoothly</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Call us now or send a WhatsApp message. Our certified technicians
              are available 24/7 across every governorate in Kuwait.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-700 text-ink-900 shadow-xl transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5 text-primary-600" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-success-500 to-accent-500 px-7 py-3.5 text-sm font-700 text-white shadow-xl shadow-success-500/25 transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-600 text-white backdrop-blur transition-colors hover:bg-white/10"
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
