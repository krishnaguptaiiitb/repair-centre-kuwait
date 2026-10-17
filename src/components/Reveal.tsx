import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  as?: 'div' | 'section' | 'li' | 'span';
};

// Wraps children and animates them in when scrolled into view.
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      data-reveal
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
