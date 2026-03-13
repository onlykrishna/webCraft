import SectionWrapper from '@/components/common/SectionWrapper';
import LeadMagnetSection from './Home/sections/LeadMagnetSection';

export const AuditPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Free Website Audit</h1>
          <p className="text-muted">
            Discover what is holding your website back from growth.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center text-muted">Audit form coming soon</div>
      </SectionWrapper>

      <LeadMagnetSection />
    </>
  );
};