import type { ReactNode } from 'react';
import { Snowflake } from 'lucide-react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-600 uppercase tracking-[0.16em] ${
            light
              ? 'bg-white/10 text-accent-300 ring-1 ring-white/15'
              : 'bg-primary-50 text-primary-700 ring-1 ring-primary-200'
          }`}
        >
          <Snowflake className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-700 leading-[1.15] tracking-tight sm:text-4xl md:text-[2.6rem] ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-ink-300' : 'text-ink-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-600 uppercase tracking-[0.16em] ${
        light
          ? 'bg-white/10 text-accent-300 ring-1 ring-white/15'
          : 'bg-primary-50 text-primary-700 ring-1 ring-primary-200'
      }`}
    >
      <Snowflake className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}
