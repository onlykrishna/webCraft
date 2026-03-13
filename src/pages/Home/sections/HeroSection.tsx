import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/ui/Button';

export const HeroSection = () => (
  <SectionWrapper>
    <div className="text-center py-5">
      <h1 className="display-5">WebCraft builds conversion-first web experiences</h1>
      <p className="text-muted">Design, engineering, and growth integrated.</p>
      <div className="d-inline-flex gap-3">
        <Button>Start Free Audit</Button>
        <Button variant="outline">View Portfolio</Button>
      </div>
    </div>
  </SectionWrapper>
);