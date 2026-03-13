import { SectionWrapper } from '@/components/common/SectionWrapper';

export const BeforeAfterSection = () => (
  <SectionWrapper>
    <div className="row g-4">
      <div className="col-md-6">
        <div className="p-4 border rounded">Before</div>
      </div>
      <div className="col-md-6">
        <div className="p-4 border rounded">After</div>
      </div>
    </div>
  </SectionWrapper>
);