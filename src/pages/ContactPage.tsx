import SectionWrapper from '@/components/common/SectionWrapper';
import { LeadMagnetSection } from './Home/sections/LeadMagnetSection';

export const ContactPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Contact</h1>
          <p className="text-muted">Let’s discuss your next project.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center text-muted">Contact form coming soon</div>
      </SectionWrapper>

      <LeadMagnetSection />
    </>
  );
};