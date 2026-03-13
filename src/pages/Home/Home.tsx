import { HeroSection } from './sections/HeroSection';
import { PainPointsSection } from './sections/PainPointsSection';
import { SolutionSection } from './sections/SolutionSection';
import { ServicesOverviewSection } from './sections/ServicesOverviewSection';
import { BeforeAfterSection } from './sections/BeforeAfterSection';
import { PortfolioPreviewSection } from './sections/PortfolioPreviewSection';
import { ProcessSection } from './sections/ProcessSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSnapshotSection } from './sections/PricingSnapshotSection';
import { LeadMagnetSection } from './sections/LeadMagnetSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { MainLayout } from '@/layouts/MainLayout';

export const Home = () => (
  <MainLayout>
    <HeroSection />
    <PainPointsSection />
    <SolutionSection />
    <ServicesOverviewSection />
    <BeforeAfterSection />
    <PortfolioPreviewSection />
    <ProcessSection />
    <TestimonialsSection />
    <PricingSnapshotSection />
    <LeadMagnetSection />
    <FinalCTASection />
  </MainLayout>
);