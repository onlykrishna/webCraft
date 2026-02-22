import React from 'react';
import usePackages from '@/hooks/usePackages';
import Card from '@/ui/Card';
import Skeleton from '@/ui/Skeleton';
import SectionWrapper from '@/components/common/SectionWrapper';

const iconMap: Record<string, string> = {
  design: '🎨',
  development: '💻',
  seo: '🔍',
  maintenance: '🛠️',
  default: '⚡',
};

export const ServicesOverviewSection: React.FC = () => {
  const { data, loading } = usePackages();

  return (
    <SectionWrapper id="services">

      {/* HEADER */}
      <div className="text-center mb-5">
        <span className="section-chip">Our Services</span>

        <h2 className="section-title mt-2">
          Everything You Need to
          <span className="section-gradient"> Grow Online</span>
        </h2>

        <p className="section-sub">
          We build complete digital experiences that help businesses attract,
          convert, and retain customers.
        </p>
      </div>

      {/* GRID */}
      <div className="row gy-4 stagger-container reveal-visible">

        {/* SKELETON */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <Card className="card-3d p-4">
                <Skeleton height={150} />
              </Card>
            </div>
          ))}

        {/* DATA */}
        {!loading &&
          data?.map((pkg: any) => {
            const emoji =
              iconMap[pkg.slug?.toLowerCase()] || iconMap.default;

            return (
              <div className="col-md-6 col-lg-4" key={pkg.id}>
                <Card className="card-3d service-card">

                  {/* ICON */}
                  <div className="service-icon">
                    {emoji}
                  </div>

                  {/* TITLE */}
                  <h5 className="mt-3">{pkg.title}</h5>

                  {/* DESC */}
                  <p className="text-muted service-desc">
                    {pkg.description}
                  </p>

                  {/* CTA */}
                  <div className="service-link">
                    Learn more →
                  </div>

                </Card>
              </div>
            );
          })}

      </div>
    </SectionWrapper>
  );
};

export default ServicesOverviewSection;