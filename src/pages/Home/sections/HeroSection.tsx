import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '@/components/common/SectionWrapper';
import GradientBlobs from '@/components/visuals/GradientBlobs';
import Card from '@/ui/Card';

const HeroSection: React.FC = () => (
  <SectionWrapper id="hero" className="position-relative">
    <div className="hero-bg-blobs"><GradientBlobs /></div>
    <div className="hero-inner">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 style={{ fontSize: '48px', lineHeight: 1.02 }} className="fw-bold">Design-forward websites that <span style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>grow revenue</span> and brand trust.</h1>
          <p className="lead text-muted mt-3" style={{ maxWidth: 560 }}>We combine product thinking, high-converting UX and fast technical implementation to turn visitors into customers.</p>
          <div className="d-flex gap-3 mt-4">
            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--wc-primary-gradient)', border: 'none', padding: '0.7rem 1.2rem', borderRadius: 14 }}>Book consultation</Link>
            <Link to="/audit" className="btn btn-outline-light" style={{ padding: '0.6rem 1rem', borderRadius: 12 }}>Free audit</Link>
          </div>
          <div className="d-flex gap-4 mt-4 align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3"><strong>30+</strong></div>
              <div className="text-muted">Sites launched</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3"><strong>98%</strong></div>
              <div className="text-muted">Client satisfaction</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div style={{ position: 'relative', minHeight: 360 }}>
            <Card style={{ position: 'absolute', right: 0, top: 20, width: 320, height: 200 }} elevation={2}>
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Mockup A</div>
            </Card>
            <Card style={{ position: 'absolute', right: 40, top: 140, width: 300, height: 180, transform: 'rotate(-4deg)' }} elevation={1}>
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Mockup B</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default HeroSection;
