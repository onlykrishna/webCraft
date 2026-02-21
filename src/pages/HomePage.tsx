import { CTASection } from '@/components/sections/CTASection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioGridSection } from '@/components/sections/PortfolioGridSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <PortfolioGridSection />
    <TestimonialsSection />
    <CTASection />
  </>
);
