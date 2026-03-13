import SectionWrapper from '@/components/common/SectionWrapper';
import { LeadMagnetSection } from '@/pages/Home/sections/LeadMagnetSection';
import PortfolioPreviewSection from './Home/sections/PortfolioPreviewSection';

export const PortfolioPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Our Work</h1>
          <p className="text-muted">
            Explore projects where we helped businesses grow online.
          </p>
        </div>
      </SectionWrapper>

      <PortfolioPreviewSection />

      <LeadMagnetSection />
    </>
  );
};