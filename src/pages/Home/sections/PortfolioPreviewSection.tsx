import { SectionWrapper } from '@/components/common/SectionWrapper';
import { useProjects } from '@/hooks/useProjects';
import { Card } from '@/ui/Card';
import { Skeleton } from '@/ui/Skeleton';

export const PortfolioPreviewSection = () => {
  const { data, loading } = useProjects();
  return (
    <SectionWrapper>
      <div className="row g-3">
        {loading && (
          <>
            <div className="col-md-4"><Skeleton height={160} /></div>
            <div className="col-md-4"><Skeleton height={160} /></div>
            <div className="col-md-4"><Skeleton height={160} /></div>
          </>
        )}
        {!loading && data.length === 0 && <div className="text-center text-muted">No projects yet</div>}
        {!loading && data.slice(0, 6).map((p) => (
          <div key={p.id || p.title} className="col-md-4">
            <Card className="p-3">
              <div className="fw-bold">{p.title}</div>
              <div className="text-muted">{p.summary}</div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};export default PortfolioPreviewSection;
