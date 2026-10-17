import {
  Snowflake,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Wind,
  WashingMachine,
  Refrigerator,
  ShieldCheck,
} from 'lucide-react';
import { useRouter, type RoutePath } from '@/lib/router';
import { COMPANY, SERVICES } from '@/lib/data';

export default function Footer() {
  const { navigate } = useRouter();

  const linkCls = 'text-ink-300 hover:text-white transition-colors text-sm';
  const iconCls = 'h-4 w-4 text-accent-400 shrink-0';

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30">
                <Snowflake className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-[15px] font-700 tracking-tight">
                  Repair Center
                </span>
                <span className="text-[11px] font-500 uppercase tracking-[0.18em] text-accent-300">
                  Kuwait
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Kuwait's trusted 24/7 AC and appliance repair specialists. Certified
              technicians, fair pricing, and same-day service across every governorate.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-500 text-ink-200">
                <ShieldCheck className="h-3.5 w-3.5 text-success-500" />
                Service warranty
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-500 text-ink-200">
                <Clock className="h-3.5 w-3.5 text-accent-400" />
                24/7 availability
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {([
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ] as { label: string; to: RoutePath }[]).map((l) => (
                <li key={l.to}>
                  <button onClick={() => navigate(l.to)} className={linkCls}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigate('/services')}
                    className={`${linkCls} flex items-center gap-2`}
                  >
                    {s.icon === 'Wind' && <Wind className={iconCls} />}
                    {s.icon === 'WashingMachine' && (
                      <WashingMachine className={iconCls} />
                    )}
                    {s.icon === 'Refrigerator' && (
                      <Refrigerator className={iconCls} />
                    )}
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent-400" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-success-500" />
                  WhatsApp 24/7
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent-400" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-200">
                <MapPin className="h-4 w-4 text-accent-400" />
                {COMPANY.area}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-200">
                <Clock className="h-4 w-4 text-accent-400" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Repair Center Kuwait. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            Expert AC & appliance repair across Kuwait.
          </p>
        </div>
      </div>
    </footer>
  );
}
