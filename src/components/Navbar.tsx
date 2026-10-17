import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle, Snowflake } from 'lucide-react';
import { useRouter, type RoutePath } from '@/lib/router';
import { COMPANY } from '@/lib/data';

const NAV_LINKS: { label: string; to: RoutePath }[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (to: RoutePath) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => go('/')}
          className="group flex items-center gap-2.5"
          aria-label="Repair Center Kuwait home"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30 transition-transform group-hover:scale-105">
            <Snowflake className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-700 tracking-tight text-white">
              Repair Center
            </span>
            <span className="text-[11px] font-500 uppercase tracking-[0.18em] text-accent-300">
              Kuwait
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = path === link.to;
            return (
              <button
                key={link.to}
                onClick={() => go(link.to)}
                className={`relative rounded-full px-4 py-2 text-sm font-500 transition-colors ${
                  active ? 'text-white' : 'text-ink-300 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-600 text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            <Phone className="h-4 w-4 text-accent-300" />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-success-500 to-accent-500 px-4 py-2 text-sm font-600 text-white shadow-lg shadow-success-500/25 transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-ink-950/95 p-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = path === link.to;
              return (
                <button
                  key={link.to}
                  onClick={() => go(link.to)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-600 transition-colors ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-ink-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-600 text-white"
            >
              <Phone className="h-4 w-4 text-accent-300" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-success-500 to-accent-500 px-4 py-3 text-sm font-600 text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
