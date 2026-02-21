import React from 'react';

const MetricBadge: React.FC<{ stat: string; label?: string }> = ({ stat, label }) => (
  <div className="d-inline-flex flex-column align-items-start">
    <div className="h3 mb-0">{stat}</div>
    {label && <small className="text-muted">{label}</small>}
  </div>
);

export default MetricBadge;
