import SectionWrapper from '@/components/common/SectionWrapper';
import Card from '@/ui/Card';
import { useState } from 'react';

const filters = ['All', 'SaaS', 'Ecommerce', 'Local Business', 'Landing'];

const PortfolioCard = ({ title, desc, price, tags }: any) => (
  <Card className="p-0 overflow-hidden h-100 position-relative">

    {/* IMAGE */}
    <div className="position-relative overflow-hidden" style={{ height: 160 }}>
      <div
        className="card-image w-100 h-100"
        style={{
          background: 'linear-gradient(120deg,#0ea5e9,#6366f1)',
        }}
      />
      <div className="card-overlay" />
    </div>

    {/* BODY */}
    <div className="p-3">

      <h6 className="fw-semibold">{title}</h6>
      <p className="text-muted small">{desc}</p>

      {/* TAGS */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {tags.map((t: string) => (
          <span key={t} className="badge bg-dark-subtle text-light">{t}</span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="d-flex justify-content-between align-items-center">
        <strong>{price}</strong>
        <small className="text-muted">View case →</small>
      </div>

    </div>

  </Card>
);

export const PortfolioGridSection = () => {
  const [active, setActive] = useState('All');

  return (
    <SectionWrapper>

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <span className="badge bg-primary-subtle text-primary mb-2">Portfolio</span>

          <h2 className="fw-bold">
            Latest{' '}
            <span style={{ background: 'var(--wc-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Work
            </span>
          </h2>
        </div>

        <a href="/portfolio" className="text-decoration-none">
          View all →
        </a>

      </div>

      {/* FILTERS */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`btn btn-sm ${active === f ? 'wc-btn-primary' : 'btn-outline-secondary'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="row g-4">

        <div className="col-md-6 col-lg-4">
          <PortfolioCard
            title="SaaS Dashboard"
            desc="Modern analytics dashboard redesign"
            price="₹80k project"
            tags={['React', 'SaaS']}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <PortfolioCard
            title="Restaurant Website"
            desc="Booking-focused restaurant redesign"
            price="₹45k project"
            tags={['Local', 'SEO']}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <PortfolioCard
            title="Ecommerce Store"
            desc="High-conversion Shopify storefront"
            price="₹120k project"
            tags={['Shopify', 'Ecom']}
          />
        </div>

      </div>

    </SectionWrapper>
  );
};