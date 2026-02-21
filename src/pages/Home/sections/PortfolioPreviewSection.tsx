import React from 'react';
import useProjects from '@/hooks/useProjects';
import Card from '@/ui/Card';
import Skeleton from '@/ui/Skeleton';

export const PortfolioPreviewSection: React.FC = () => {
  const { data, loading } = useProjects();

  return (
    <div>
      <h2 className="h3 mb-4">Recent Work</h2>
      <div className="row gy-3">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div className="col-md-4" key={i}><Card><Skeleton height={160} /></Card></div>
        ))}
        {!loading && data?.length ? data.slice(0, 6).map((p) => (
          <div className="col-md-4" key={p.id}>
            <Card>
              <div style={{ height: 140, background: '#f1f5f9', borderRadius: 8 }} />
              <h5 className="mt-2">{p.title}</h5>
            </Card>
          </div>
        )) : !loading && <div className="text-muted">No projects yet.</div>}
      </div>
    </div>
  );
};

export default PortfolioPreviewSection;
