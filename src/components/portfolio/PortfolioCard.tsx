import React from 'react';
import Card from '@/ui/Card';

const PortfolioCard: React.FC<{ title: string; category?: string; image?: string; metric?: string }> = ({ title, category, image, metric }) => (
  <Card className="overflow-hidden" elevation={1}>
    <div style={{ position: 'relative', height: 200, overflow: 'hidden', borderRadius: 16 }}>
      <img src={image || '/placeholder.png'} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }} />
      <div style={{ position: 'absolute', left: 12, top: 12, background: 'rgba(0,0,0,0.45)', color: '#fff', padding: '6px 10px', borderRadius: 999 }}>{category}</div>
      <div style={{ position: 'absolute', right: 12, bottom: 12, background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', color: '#fff', padding: '6px 10px', borderRadius: 12 }}>{metric}</div>
    </div>
    <div className="mt-3">
      <h5 className="mb-1">{title}</h5>
      <p className="text-muted small mb-0">Short description or subtitle</p>
    </div>
  </Card>
);

export default PortfolioCard;
