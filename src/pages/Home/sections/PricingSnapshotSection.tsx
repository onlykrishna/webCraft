import { SectionWrapper } from '@/components/common/SectionWrapper';
import { usePackages } from '@/hooks/usePackages';
import { Card } from '@/ui/Card';
import { Skeleton } from '@/ui/Skeleton';

export const PricingSnapshotSection = () => {
  const { data, loading } = usePackages();
  return (
    <SectionWrapper>
      <div className="row g-3">
        {loading && (
          <>
            <div className="col-md-4"><Skeleton height={140} /></div>
            <div className="col-md-4"><Skeleton height={140} /></div>
            <div className="col-md-4"><Skeleton height={140} /></div>
          </>
        )}
        {!loading && data.length === 0 && <div className="text-center text-muted">Pricing coming soon</div>}
        {!loading && data.slice(0, 3).map((p) => (
          <div key={p.id || p.name} className="col-md-4">
            <Card className="p-4">
              <div className="fw-bold">{p.name}</div>
              <div className="display-6">${p.priceFrom}</div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};