import { SectionWrapper } from '@/components/common/SectionWrapper';
import { usePackages } from '@/hooks/usePackages';
import { Card } from '@/ui/Card';
import { Skeleton } from '@/ui/Skeleton';

export const ServicesOverviewSection = () => {
  const { data, loading } = usePackages();
  return (
    <SectionWrapper>
      <div className="row g-3">
        {loading && (
          <>
            <div className="col-md-3"><Skeleton height={120} /></div>
            <div className="col-md-3"><Skeleton height={120} /></div>
            <div className="col-md-3"><Skeleton height={120} /></div>
            <div className="col-md-3"><Skeleton height={120} /></div>
          </>
        )}
        {!loading && data.length === 0 && <div className="text-center text-muted">No packages available</div>}
        {!loading && data.map((p) => (
          <div key={p.id || p.name} className="col-md-3">
            <Card className="p-3">
              <div className="fw-bold">{p.name}</div>
              <div className="text-muted">From ${p.priceFrom}</div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};