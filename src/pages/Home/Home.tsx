import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import ServicesOverviewSection from './sections/ServicesOverviewSection';
import PortfolioPreviewSection from './sections/PortfolioPreviewSection';
import LogoMarquee from '@/ui/LogoMarquee';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSnapshotSection from './sections/PricingSnapshotSection';
import LeadMagnetSection from './sections/LeadMagnetSection';
import SectionWrapper from '@/components/common/SectionWrapper';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <SectionWrapper><ServicesOverviewSection /></SectionWrapper>
      <SectionWrapper><PortfolioPreviewSection /></SectionWrapper>
      <SectionWrapper>
        <LogoMarquee />
      </SectionWrapper>
      <SectionWrapper><TestimonialsSection /></SectionWrapper>
      <SectionWrapper><PricingSnapshotSection /></SectionWrapper>
      <SectionWrapper><LeadMagnetSection /></SectionWrapper>
    </MainLayout>
  );
};

export default HomePage;
