import SectionWrapper from '@/components/common/SectionWrapper';
import Card from '@/ui/Card';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ name, role, text }: any) => (
  <Card className="p-4 h-100 position-relative">

    {/* STARS */}
    <div className="text-warning mb-2">
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    </div>

    {/* TEXT */}
    <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
      "{text}"
    </p>

    {/* USER */}
    <div className="d-flex align-items-center gap-3">
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'linear-gradient(120deg,#6366f1,#06b6d4)',
        }}
      />
      <div>
        <strong>{name}</strong>
        <div className="small text-muted">{role}</div>
      </div>
    </div>

    {/* QUOTE ICON */}
    <FaQuoteRight
      className="position-absolute"
      style={{
        right: 20,
        top: 20,
        opacity: 0.15,
        fontSize: 22,
      }}
    />

  </Card>
);

export const TestimonialsSection = () => {
  return (
    <SectionWrapper>

      {/* HEADER */}
      <div className="text-center mb-5">
        <span className="badge bg-success-subtle text-success mb-2">Testimonials</span>

        <h2 className="fw-bold">
          Loved by{' '}
          <span style={{ background: 'var(--wc-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Clients
          </span>
        </h2>

        <p className="text-muted">
          Real feedback from businesses we’ve helped grow online.
        </p>
      </div>

      {/* GRID */}
      <div className="row g-4">

        <div className="col-md-4">
          <TestimonialCard
            name="Rahul Sharma"
            role="Restaurant Owner"
            text="WebCraft redesigned our website and bookings increased dramatically within weeks."
          />
        </div>

        <div className="col-md-4">
          <TestimonialCard
            name="Neha Kapoor"
            role="Salon Founder"
            text="Clean design, fast delivery, and great communication throughout the project."
          />
        </div>

        <div className="col-md-4">
          <TestimonialCard
            name="Amit Verma"
            role="Gym Owner"
            text="Our new website looks premium and generates consistent inquiries."
          />
        </div>

      </div>

      {/* LOGO STRIP */}
      <div className="d-flex justify-content-center gap-4 mt-5 text-muted small flex-wrap">
        <span>Google</span>
        <span>Microsoft</span>
        <span>Meta</span>
        <span>Amazon</span>
        <span>Shopify</span>
      </div>

    </SectionWrapper>
  );
};