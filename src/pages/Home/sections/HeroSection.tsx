import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '@/components/common/SectionWrapper';
import GradientBlobs from '@/components/visuals/GradientBlobs';
import Card from '@/ui/Card';

const FloatingStat = ({ className, children }: any) => (
  <div className={`floating-card floating-anim glass-panel p-3 position-absolute ${className}`}>
    {children}
  </div>
);

const HeroSection: React.FC = () => (
  <SectionWrapper id="hero" className="position-relative overflow-hidden">

    {/* BACKGROUND BLOBS */}
    <div className="hero-bg-blobs">
      <GradientBlobs />
    </div>

    {/* SOFT RADIAL GLOW */}
    <div className="hero-glow" />

    <div className="hero-inner">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6">

          {/* BADGE */}
          <div className="hero-badge mb-3">
            #1 Website Growth Partner
          </div>

          {/* HEADLINE */}
          <h1 className="hero-title">
            Design-forward websites that
            <span className="hero-gradient"> grow revenue </span>
            and brand trust.
          </h1>

          {/* SUB */}
          <p className="hero-sub mt-3">
            We combine product thinking, high-converting UX and fast technical
            implementation to turn visitors into customers.
          </p>

          {/* CTA */}
          <div className="d-flex gap-3 mt-4">
            <Link to="/contact" className="wc-btn-primary">
              Book consultation
            </Link>

            <Link to="/free-audit" className="btn btn-outline-light" style={{ borderRadius: 12 }}>
              Free audit
            </Link>
          </div>

          {/* METRICS */}
          <div className="hero-metrics mt-4">
            <div>
              <b>30+</b>
              <span>Sites launched</span>
            </div>
            <div>
              <b>98%</b>
              <span>Client satisfaction</span>
            </div>
            <div>
              <b>4.9</b>
              <span>Avg rating</span>
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="hero-visual">

            {/* FLOATING STATS */}
            <FloatingStat className="fs-1">⭐ 5.0 Rating</FloatingStat>
            <FloatingStat className="fs-2">🚀 +42% Conversions</FloatingStat>
            <FloatingStat className="fs-3">💰 $1.2M Generated</FloatingStat>

            {/* MAIN CARD */}
            <Card
              className="hero-card-main"
              elevation={2}
            >
              <div className="hero-card-content">
                <h6>Conversion Dashboard</h6>
                <div className="hero-chart" />
              </div>
            </Card>

            {/* SECOND CARD */}
            <Card
              className="hero-card-secondary"
              elevation={1}
            >
              <div className="hero-card-content">
                <h6>Live Website Preview</h6>
                <div className="hero-preview" />
              </div>
            </Card>

          </div>
        </div>

      </div>
    </div>
  </SectionWrapper>
);

export default HeroSection;