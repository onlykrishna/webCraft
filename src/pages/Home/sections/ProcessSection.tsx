import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/ui/Card';

export const ProcessSection = () => (
  <SectionWrapper>
    <div className="row g-3">
      <div className="col-md-3"><Card className="p-3">Discover</Card></div>
      <div className="col-md-3"><Card className="p-3">Design</Card></div>
      <div className="col-md-3"><Card className="p-3">Develop</Card></div>
      <div className="col-md-3"><Card className="p-3">Optimize</Card></div>
    </div>
  </SectionWrapper>
);