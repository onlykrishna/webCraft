import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/ui/Card';

export const SolutionSection = () => (
  <SectionWrapper>
    <div className="row g-3">
      <div className="col-md-4"><Card className="p-4">Performance optimization</Card></div>
      <div className="col-md-4"><Card className="p-4">Conversion-focused UX</Card></div>
      <div className="col-md-4"><Card className="p-4">Modern CMS</Card></div>
    </div>
  </SectionWrapper>
);