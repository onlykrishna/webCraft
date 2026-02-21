import React from 'react';
import usePackages from '@/hooks/usePackages';
import Card from '@/ui/Card';
import Skeleton from '@/ui/Skeleton';

export const ServicesOverviewSection: React.FC = () => {
  const { data, loading } = usePackages();

  return (
    <div>
      <h2 className="h3 mb-4">Our Services</h2>
      <div className="row gy-3">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div className="col-md-4" key={i}><Card><Skeleton height={140} /></Card></div>
        ))}
        {!loading && data?.length ? data.map((pkg: any) => (
          <div className="col-md-4" key={pkg.id}>
            <Card>
              <h5>{pkg.title}</h5>
              <p className="text-muted">{pkg.description}</p>
            </Card>
          </div>
        )) : !loading && <div className="text-muted">No packages found.</div>}
      </div>
    </div>
  );
};

export default ServicesOverviewSection;
