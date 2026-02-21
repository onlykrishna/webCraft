import React from 'react';

const Loader: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <div style={{ width: size, height: size, display: 'inline-block' }} className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Loader;
