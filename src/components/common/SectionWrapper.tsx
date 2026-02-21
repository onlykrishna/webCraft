import React, { useEffect, useRef, useState } from 'react';

const SectionWrapper: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref as any} className={`${className || ''} ${visible ? 'reveal-visible' : 'reveal-hidden'}`} style={{ padding: `calc(var(--wc-spacing-section,96px) / 1.2) 0` }}>
      <div className="container" style={{ maxWidth: 1200 }}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
