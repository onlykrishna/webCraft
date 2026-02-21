import Button from '@/ui/Button';
import SectionWrapper from '@/components/common/SectionWrapper';

const FloatingCard = ({ className, children }: any) => (
  <div className={`floating-card floating-anim glass-panel p-3 position-absolute ${className}`}>
    {children}
  </div>
);

export const HeroSection = () => {
  return (
    <SectionWrapper className="position-relative overflow-hidden">
      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-lg-6">

          <span className="badge bg-success-subtle text-success mb-3">
            #1 Website Growth Partner
          </span>

          <h1 className="fw-bold display-5 mb-3">
            Websites That{' '}
            <span style={{ background: 'var(--wc-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Convert Visitors
            </span>{' '}
            Into Customers
          </h1>

          <p className="text-muted mb-4">
            We design modern, fast, conversion-focused websites for small businesses ready to grow.
          </p>

          <div className="d-flex gap-3 mb-4">
            <Button>Start Project</Button>
            <Button variant="outline">View Work</Button>
          </div>

          <div className="d-flex gap-4">
            <div>
              <h5 className="mb-0">50+</h5>
              <small className="text-muted">Clients</small>
            </div>
            <div>
              <h5 className="mb-0">120+</h5>
              <small className="text-muted">Projects</small>
            </div>
            <div>
              <h5 className="mb-0">98%</h5>
              <small className="text-muted">Satisfaction</small>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-6 position-relative" style={{ minHeight: 360 }}>

          <FloatingCard className="top-0 start-50 translate-middle-x">
            ⭐ 5.0 Client Rating
          </FloatingCard>

          <FloatingCard className="bottom-0 start-0">
            💰 +32% Conversion
          </FloatingCard>

          <FloatingCard className="top-50 end-0">
            🚀 Live Website
          </FloatingCard>

        </div>
      </div>
    </SectionWrapper>
  );
};