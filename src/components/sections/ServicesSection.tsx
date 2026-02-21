import SectionWrapper from '@/components/common/SectionWrapper';
import Card from '@/ui/Card';
import { FaPaintBrush, FaRocket, FaSearch, FaTools } from 'react-icons/fa';

const ServiceCard = ({ icon, title, desc, accent }: any) => (
  <Card className="p-4 h-100 position-relative">

    {/* Icon */}
    <div
      className="d-inline-flex align-items-center justify-content-center mb-3"
      style={{
        width: 56,
        height: 56,
        borderRadius: 18,
        background: accent,
        color: '#fff',
        fontSize: 20,
      }}
    >
      {icon}
    </div>

    {/* Title */}
    <h5 className="fw-semibold mb-2">{title}</h5>

    {/* Description */}
    <p className="text-muted mb-0">{desc}</p>

    {/* Accent underline */}
    <div
      className="position-absolute bottom-0 start-0 w-100"
      style={{
        height: 3,
        borderRadius: 3,
        background: accent,
        opacity: 0.4,
      }}
    />

  </Card>
);

export const ServicesSection = () => {
  return (
    <SectionWrapper>

      {/* HEADER */}
      <div className="text-center mb-5">
        <span className="badge bg-info-subtle text-info mb-2">Our Services</span>

        <h2 className="fw-bold">
          Everything You Need to{' '}
          <span style={{ background: 'var(--wc-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Grow Online
          </span>
        </h2>

        <p className="text-muted">
          We build complete digital experiences that help businesses attract, convert, and retain customers.
        </p>
      </div>

      {/* GRID */}
      <div className="row g-4">

        <div className="col-md-6 col-lg-3">
          <ServiceCard
            icon={<FaPaintBrush />}
            title="UI/UX Design"
            desc="Modern, conversion-focused interfaces tailored for your audience."
            accent="linear-gradient(90deg,#06b6d4,#22c55e)"
          />
        </div>

        <div className="col-md-6 col-lg-3">
          <ServiceCard
            icon={<FaRocket />}
            title="Website Development"
            desc="Fast, scalable websites built with modern technologies."
            accent="linear-gradient(90deg,#7c3aed,#06b6d4)"
          />
        </div>

        <div className="col-md-6 col-lg-3">
          <ServiceCard
            icon={<FaSearch />}
            title="SEO Optimization"
            desc="Improve visibility and drive organic traffic to your business."
            accent="linear-gradient(90deg,#22c55e,#10b981)"
          />
        </div>

        <div className="col-md-6 col-lg-3">
          <ServiceCard
            icon={<FaTools />}
            title="Maintenance"
            desc="Continuous improvements, updates, and performance monitoring."
            accent="linear-gradient(90deg,#f97316,#f59e0b)"
          />
        </div>

      </div>

    </SectionWrapper>
  );
};