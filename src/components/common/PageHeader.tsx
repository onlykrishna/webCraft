import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-4">
    <h1 className="display-5 fw-bold">{title}</h1>
    {subtitle && <p className="text-muted fs-5">{subtitle}</p>}
  </div>
);

export default PageHeader;
