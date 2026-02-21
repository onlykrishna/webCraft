import SectionWrapper from '@/components/common/SectionWrapper';
import { PricingSnapshotSection } from '@/pages/Home/sections/PricingSnapshotSection';
import LeadMagnetSection from './Home/sections/LeadMagnetSection';

export const PricingPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Pricing</h1>
          <p className="text-muted">
            Transparent packages designed for businesses of every stage.
          </p>
        </div>
      </SectionWrapper>

      <PricingSnapshotSection />

      <LeadMagnetSection />
    </>
  );
};