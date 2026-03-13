import { SectionWrapper } from '@/components/common/SectionWrapper';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Card } from '@/ui/Card';
import { Skeleton } from '@/ui/Skeleton';

export const TestimonialsSection = () => {
  const { data, loading } = useTestimonials();
  return (
    <SectionWrapper>
      <div className="row g-3">
        {loading && (
          <>
            <div className="col-md-4"><Skeleton height={120} /></div>
            <div className="col-md-4"><Skeleton height={120} /></div>
            <div className="col-md-4"><Skeleton height={120} /></div>
          </>
        )}
        {!loading && data.length === 0 && <div className="text-center text-muted">No testimonials yet</div>}
        {!loading && data.slice(0, 6).map((t) => (
          <div key={t.id || t.clientName} className="col-md-4">
            <Card className="p-3">
              <div className="fw-bold">{t.clientName}</div>
              <div className="text-muted">{t.quote}</div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};