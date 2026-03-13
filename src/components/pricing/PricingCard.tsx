import React from 'react';
import Card from '@/ui/Card';

const PricingCard: React.FC<{ title: string; price?: string; popular?: boolean; features?: string[] }> = ({ title, price, popular, features = [] }) => (
  <Card className={`p-4 ${popular ? 'border-special' : ''}`} elevation={popular ? 2 : 1}>
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <h5 className="mb-0">{title}</h5>
        <div className="text-muted small mt-1">{features[0] || 'Core features'}</div>
      </div>
      <div className="text-end">
        <div className="h4 fw-bold">{price || 'Custom'}</div>
        {popular && <div className="badge bg-primary text-white mt-1">Popular</div>}
      </div>
    </div>

    <hr />
    <ul className="list-unstyled small">
      {features.map((f, i) => (<li key={i}>• {f}</li>))}
    </ul>
    <div className="mt-3">
      <a className="btn" style={{ background: 'var(--wc-primary-gradient)', color: '#fff', padding: '0.5rem 1rem', borderRadius: 12 }} href="/contact">Choose plan</a>
    </div>
  </Card>
);

export default PricingCard;
