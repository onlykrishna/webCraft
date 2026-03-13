import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/ui/Card';

export const PainPointsSection = () => (
  <SectionWrapper>
    <div className="row g-3">
      <div className="col-md-4"><Card className="p-4">Slow site speed</Card></div>
      <div className="col-md-4"><Card className="p-4">Low conversions</Card></div>
      <div className="col-md-4"><Card className="p-4">Difficult CMS</Card></div>
    </div>
  </SectionWrapper>
);