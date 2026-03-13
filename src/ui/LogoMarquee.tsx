import React from 'react';

const LogoMarquee: React.FC<{ items?: string[] }> = ({ items = ['Acme', 'Nimbus', 'Orbit', 'Kite', 'Lumen', 'Apex', 'Forge', 'Beacon'] }) => {
  return (
    <div style={{ overflow: 'hidden', padding: '1.25rem 0' }}>
      <div style={{ display: 'flex', gap: 24, whiteSpace: 'nowrap', animation: 'wc-marquee 18s linear infinite' }}>
        {items.concat(items).map((t, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 120, padding: '8px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', color: 'var(--wc-text-muted)', fontWeight: 600 }}>
            {t}
          </div>
        ))}
      </div>
      <style>{`@keyframes wc-marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  );
};

export default LogoMarquee;
