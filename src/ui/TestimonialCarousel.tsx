import React, { useState, useRef, useEffect } from 'react';

interface TestimonialCarouselProps {
  items: Array<{ id: string; quote: string; author: string; title: string; avatar?: string; rating?: number }>;
  autoplay?: boolean;
  autoplayInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ items, autoplay = true, autoplayInterval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplay || paused || items.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % items.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, paused, items.length, autoplayInterval]);

  const next = () => setCurrent((i) => (i + 1) % items.length);
  const prev = () => setCurrent((i) => (i - 1 + items.length) % items.length);

  if (!items.length) return null;
  const item = items[current];

  return (
    <div
      className="carousel-container px-4 py-5"
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ maxWidth: 800, margin: '0 auto' }}
    >
      <div className="text-center mb-4">
        {item.rating && (
          <div className="mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < item.rating! ? '#fbbf24' : '#6b7280', marginRight: 4 }}>★</span>
            ))}
          </div>
        )}
        <blockquote style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--wc-text-primary)', margin: '1.5rem 0' }}>
          "{item.quote}"
        </blockquote>
        <div style={{ fontSize: 14, marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: 'var(--wc-text-primary)' }}>{item.author}</div>
          <div style={{ color: 'var(--wc-text-muted)' }}>{item.title}</div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-4">
        <button onClick={prev} className="btn btn-sm" aria-label="Previous">←</button>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              border: 'none',
              backgroundColor: i === current ? 'var(--wc-accent)' : 'var(--wc-border)',
              cursor: 'pointer',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button onClick={next} className="btn btn-sm" aria-label="Next">→</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
