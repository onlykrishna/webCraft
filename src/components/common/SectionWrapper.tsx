import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type Props = PropsWithChildren & { maxWidth?: number; padding?: 'sm' | 'md' | 'lg' };

export const SectionWrapper = ({ children, maxWidth = 1100, padding = 'lg' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((i) => i.isIntersecting && setVisible(true)), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const pad = padding === 'sm' ? 'py-3' : padding === 'md' ? 'py-4' : 'py-5';
  return (
    <section className={pad}>
      <div ref={ref} style={{ maxWidth, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'opacity 400ms ease, transform 400ms ease' }}>
        {children}
      </div>
    </section>
  );
};