import { Snowflake } from 'lucide-react';

export default function BrandMarquee() {
  const items = [
    'Daikin',
    'LG',
    'Samsung',
    'Panasonic',
    'Midea',
    'Whirlpool',
    'Carrier',
    'Hitachi',
    'General Electric',
    'Bosch',
  ];
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center gap-2.5 text-ink-400 transition-colors hover:text-white"
          >
            <Snowflake className="h-5 w-5 text-accent-400/70" />
            <span className="font-display text-lg font-600 tracking-tight whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
