import React from 'react';
import useTestimonials from '@/hooks/useTestimonials';
import Card from '@/ui/Card';
import Skeleton from '@/ui/Skeleton';

export const TestimonialsSection: React.FC = () => {
  const { data, loading } = useTestimonials();

  return (
    <div>
      <h2 className="h3 mb-4">What our clients say</h2>
      <div className="row gy-3">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div className="col-md-4" key={i}><Card><Skeleton height={120} /></Card></div>
        ))}
        {!loading && data?.length ? data.slice(0, 3).map((t) => (
          <div className="col-md-4" key={t.id}>
            <Card>
              <blockquote className="mb-0">“{t.quote}”</blockquote>
              <div className="mt-2 text-muted">— {t.clientName}</div>
            </Card>
          </div>
        )) : !loading && <div className="text-muted">No testimonials yet.</div>}
      </div>
    </div>
  );
};

export default TestimonialsSection;
