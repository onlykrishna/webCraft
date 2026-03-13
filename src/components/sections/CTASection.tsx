import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/ui/Button';

export const CTASection = () => {
  return (
    <SectionWrapper className="text-center position-relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* BADGE */}
        <span className="badge bg-warning-subtle text-warning mb-3">
          Start for free, scale anytime
        </span>

        {/* HEADLINE */}
        <h2 className="fw-bold mb-3">
          Ready to Build Your Next{' '}
          <span style={{ background: 'var(--wc-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            High-Converting Website
          </span>
          ?
        </h2>

        {/* SUBTEXT */}
        <p className="text-muted mb-4">
          Join growing businesses already transforming their digital presence with WebCraft.
        </p>

        {/* CTA BUTTONS */}
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <Button>Start Project</Button>
          <Button variant="outline">View Portfolio</Button>
        </div>

        {/* TRUST BULLETS */}
        <div className="d-flex justify-content-center gap-4 text-muted small flex-wrap">
          <span>✔ Free consultation</span>
          <span>✔ Transparent pricing</span>
          <span>✔ 30-day support</span>
        </div>

      </div>

    </SectionWrapper>
  );
};