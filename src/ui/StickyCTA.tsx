import React, { useEffect, useState } from 'react';
import Button from '@/ui/Button';

const STORAGE_KEY = 'wc_sticky_cta_dismissed_v1';

const StickyCTA: React.FC<{ text?: string; href?: string }> = ({ text = 'Start your project', href = '/contact' }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === '1') setVisible(false);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 16, left: 16, right: 16, zIndex: 9999, display: 'flex', justifyContent: 'center' }}>
      <div className="d-flex align-items-center px-3 py-2 rounded-3 shadow" style={{ backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.06)', maxWidth: 960 }}>
        <div style={{ flex: 1, color: 'var(--wc-text-muted)', fontSize: 14 }}>
          <strong style={{ color: 'var(--wc-accent)' }}>{text}</strong>
          <div className="small text-muted">Free consult · 15 minute call</div>
        </div>
        <div className="ms-3 d-flex">
          <a href={href} className="btn btn-primary me-2">Get started</a>
          <button onClick={dismiss} aria-label="Dismiss" className="btn btn-link text-muted">✕</button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
