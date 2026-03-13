import SectionWrapper from '@/components/common/SectionWrapper';
import { TestimonialsSection } from '@/pages/Home/sections/TestimonialsSection';
import LeadMagnetSection from './Home/sections/LeadMagnetSection';

export const AboutPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">About WebCraft</h1>
          <p className="text-muted">
            We help small businesses build powerful digital experiences.
          </p>
        </div>
      </SectionWrapper>

      <TestimonialsSection />

      <LeadMagnetSection />
    </>
  );
};