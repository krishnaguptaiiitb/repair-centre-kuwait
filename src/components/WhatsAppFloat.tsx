import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-success-500 to-success-700 px-4 py-3.5 text-white shadow-2xl shadow-success-500/40 transition-all duration-500 hover:scale-105 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <span className="relative">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-success-500" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-600 sm:inline">Chat with us</span>
    </a>
  );
}
