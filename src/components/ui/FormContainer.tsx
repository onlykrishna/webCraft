import React from 'react';

const FormContainer: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => (
  <div className="glass-panel p-4" style={{ borderRadius: 16 }}>
    {title && <h5 className="mb-3">{title}</h5>}
    {children}
  </div>
);

export default FormContainer;
