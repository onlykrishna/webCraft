import SectionWrapper from '@/components/common/SectionWrapper';
import LeadMagnetSection from './Home/sections/LeadMagnetSection';

export const BlogPage = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="fw-bold">Blog</h1>
          <p className="text-muted">
            Insights, strategies, and design tips for growing online.
          </p>
        </div>
      </SectionWrapper>

      {/* BLOG GRID PLACEHOLDER */}
      <SectionWrapper>
        <div className="text-center text-muted">Blog posts coming soon</div>
      </SectionWrapper>

      <LeadMagnetSection />
    </>
  );
};