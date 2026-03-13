import { useEffect, useRef } from 'react';

export const useReveal = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};