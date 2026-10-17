import {
  Wind,
  WashingMachine,
  Refrigerator,
  PhoneCall,
  Truck,
  Wrench,
  ShieldCheck,
  Snowflake,
  type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  Wind,
  WashingMachine,
  Refrigerator,
  PhoneCall,
  Truck,
  Wrench,
  ShieldCheck,
  Snowflake,
};

export default function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Snowflake;
  return <Cmp className={className} />;
}
