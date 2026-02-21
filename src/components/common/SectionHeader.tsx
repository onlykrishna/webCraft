import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-4 ${align === 'center' ? 'text-center' : ''}`}>
    <div className="d-flex align-items-center gap-3 mb-2">
      <div style={{ width: 44, height: 4, borderRadius: 4, background: 'var(--wc-primary-gradient)' }} />
      <div className="text-muted small">{subtitle ? subtitle : ''}</div>
    </div>
    <h2 className="fw-bold" style={{ fontSize: '28px', margin: 0 }}>{title}</h2>
  </div>
);

export default SectionHeader;
