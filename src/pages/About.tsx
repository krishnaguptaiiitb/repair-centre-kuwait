import {
  Phone,
  MessageCircle,
  ArrowRight,
  Snowflake,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Wrench,
  HeartHandshake,
  Target,
  Eye,
  Star,
} from 'lucide-react';
import { COMPANY, STATS } from '@/lib/data';
import { useCountUp } from '@/lib/useCountUp';
import Reveal from '@/components/Reveal';
import { SectionHeading } from '@/components/Section';
import { useRouter } from '@/lib/router';

function Stat({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
      <p className="font-display text-4xl font-700 tracking-tight text-white">
        <span ref={ref}>{animated.toLocaleString()}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-500 uppercase tracking-wider text-ink-400">
        {label}
      </p>
    </div>
  );
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'We do the job right the first time and stand behind every repair with a warranty.',
  },
  {
    icon: Clock,
    title: 'Speed',
    text: 'Same-day response across Kuwait — because a broken AC in summer cannot wait.',
  },
  {
    icon: HeartHandshake,
    title: 'Honesty',
    text: 'Transparent, up-front pricing. No hidden fees, no unnecessary repairs, ever.',
  },
  {
    icon: Award,
    title: 'Expertise',
    text: 'Certified technicians with years of experience across all major brands and systems.',
  },
];

const TEAM = [
  {
    name: 'Ali Hassan',
    role: 'Founder & Lead Technician',
    bio: '12+ years repairing AC systems across Kuwait. Started Repair Center Kuwait to bring honest, fast service to every household.',
    icon: Wrench,
  },
  {
    name: 'Ahmed Khalifa',
    role: 'Appliance Specialist',
    bio: 'Washing machine and refrigerator expert. Diagnoses complex electronic board issues in minutes.',
    icon: Wrench,
  },
  {
    name: 'Sara Al-Farsi',
    role: 'Customer Care Lead',
    bio: 'Your first point of contact. Ensures every booking is handled quickly and every customer feels cared for.',
    icon: Users,
  },
];

export default function About() {
  const { navigate } = useRouter();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/9729389/pexels-photo-9729389.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Kuwait City skyline"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/90 to-ink-950" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
                <Snowflake className="h-3.5 w-3.5" />
                About Us
              </span>
              <h1 className="mt-6 font-display text-4xl font-700 leading-[1.1] tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                Kuwait's trusted repair{' '}
                <span className="gradient-text">specialists</span> since 2013
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
                What began as a one-technician AC repair service has grown into one
                of Kuwait's most trusted repair centers — serving thousands of
                homes and businesses with the same commitment to honesty, speed,
                and quality.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-success-500 to-accent-500 px-6 py-3.5 text-sm font-600 text-white shadow-xl shadow-success-500/25 transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get in touch
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-600 text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-accent-300" />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
                  alt="Technician repairing an outdoor AC unit"
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-2xl">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-warning-500 text-warning-500"
                      />
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm font-700 text-ink-900">
                    4.9/5 average rating
                  </p>
                  <p className="text-xs text-ink-500">From 300+ Google reviews</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink-200 bg-gradient-to-br from-primary-50 to-white p-8 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/25">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-700 tracking-tight text-ink-900">
                  Our Mission
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  To provide reliable, efficient, and affordable AC and appliance
                  repair services with an unwavering focus on quality and customer
                  satisfaction — making professional repair accessible to every
                  household and business in Kuwait.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-ink-200 bg-gradient-to-br from-accent-50 to-white p-8 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 shadow-lg shadow-accent-500/25">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-700 tracking-tight text-ink-900">
                  Our Vision
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  To be Kuwait's most trusted name in home and commercial appliance
                  repair — known for technical excellence, honest pricing, and a
                  customer experience that turns first-time callers into lifelong
                  clients.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-ink-950 py-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent-500/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              light
              eyebrow="By the numbers"
              title={
                <>
                  A track record built on{' '}
                  <span className="gradient-text">trust</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <Stat value={s.value} label={s.label} suffix={s.suffix} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title={
                <>
                  What we stand <span className="text-primary-600">for</span>
                </>
              }
              subtitle="The principles behind every service call, every repair, and every customer interaction."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-700 text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title={
                <>
                  The people behind{' '}
                  <span className="text-primary-600">the service</span>
                </>
              }
              subtitle="Skilled, certified, and genuinely committed to solving your appliance problems fast."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 120}>
                <div className="group h-full rounded-3xl border border-ink-200 bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/20">
                    <member.icon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-700 text-ink-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-600 text-primary-600">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-700 leading-tight tracking-tight text-white text-balance sm:text-4xl">
              Ready to experience the{' '}
              <span className="gradient-text">difference?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-ink-200">
              Join thousands of satisfied customers across Kuwait who trust us with
              their AC and appliance repairs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-7 py-3.5 text-sm font-700 text-white shadow-xl shadow-primary-500/25 transition-transform hover:scale-[1.03]"
              >
                Book an appointment
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-600 text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-accent-300" />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
