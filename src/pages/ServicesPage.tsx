import SectionWrapper from '@/components/common/SectionWrapper';
import { ServicesOverviewSection } from '@/pages/Home/sections/ServicesOverviewSection';
import LeadMagnetSection from './Home/sections/LeadMagnetSection';

export const ServicesPage = () => {
  return (
    <>
      {/* HERO */}
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Our Services</h1>
          <p className="text-muted">
            Everything your business needs to design, launch, and grow online.
          </p>
        </div>
      </SectionWrapper>

      {/* CORE */}
      <ServicesOverviewSection />

      {/* CTA */}
      <LeadMagnetSection />
    </>
  );
};