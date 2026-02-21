import React from 'react';
import usePackages from '@/hooks/usePackages';
import Card from '@/ui/Card';
import Skeleton from '@/ui/Skeleton';

export const PricingSnapshotSection: React.FC = () => {
  const { data, loading } = usePackages();

  return (
    <div>
      <h2 className="h3 mb-4">Pricing snapshot</h2>
      <div className="row gy-3">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div className="col-md-4" key={i}><Card><Skeleton height={150} /></Card></div>
        ))}
        {!loading && data?.length ? data.slice(0,3).map((pkg:any)=> (
          <div className="col-md-4" key={pkg.id}>
            <Card>
              <h5>{pkg.title}</h5>
              <div className="fw-bold">{pkg.price || 'Custom'}</div>
            </Card>
          </div>
        )) : !loading && <div className="text-muted">Pricing not available.</div>}
      </div>
    </div>
  );
};

export default PricingSnapshotSection;
