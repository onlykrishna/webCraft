import Button from '@/ui/Button';
import SectionWrapper from '@/components/common/SectionWrapper';

const FloatingCard = ({ className, children }: any) => (
  <div className={`floating-card floating-anim glass-panel hero-float-card ${className}`}>
    {children}
  </div>
);

export const HeroSection = () => {
  return (
    <SectionWrapper className="hero-section position-relative overflow-hidden">

      <div className="row align-items-center">

        {/* ================= LEFT ================= */}
        <div className="col-lg-6 hero-left">

          {/* BADGE */}
          <div className="hero-badge mb-3">
            #1 Website Growth Partner
          </div>

          {/* HEADING */}
          <h1 className="hero-heading mb-3">
            Websites That{' '}
            <span className="hero-gradient">Convert Visitors</span>{' '}
            Into Customers
          </h1>

          {/* SUBTITLE */}
<div className="hero-sub-wrap mb-4">
  <p className="hero-subtitle mb-0">
    We design modern, fast, conversion-focused websites for small businesses ready to grow.
  </p>
</div>

          {/* CTA */}
          <div className="d-flex gap-3 mb-5">
            <Button>Start Project</Button>
            <Button variant="outline">View Work</Button>
          </div>

          {/* METRICS */}
          <div className="hero-metrics">
            <div>
              <b>50+</b>
              <span>Clients</span>
            </div>
            <div>
              <b>120+</b>
              <span>Projects</span>
            </div>
            <div>
              <b>98%</b>
              <span>Satisfaction</span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="col-lg-6 hero-right">

          <FloatingCard className="hero-float-1">
            ⭐ 5.0 Client Rating
          </FloatingCard>

          <FloatingCard className="hero-float-2">
            💰 +32% Conversion
          </FloatingCard>

          <FloatingCard className="hero-float-3">
            🚀 Live Website
          </FloatingCard>

        </div>
      </div>
    </SectionWrapper>
  );
};