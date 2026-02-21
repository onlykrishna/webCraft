import React from 'react';

const Skeleton: React.FC<{ width?: string | number; height?: string | number; className?: string }> = ({ width = '100%', height = 16, className }) => (
  <div className={className} style={{ background: 'linear-gradient(90deg,#f2f5f8,#eef2f6,#f2f5f8)', backgroundSize: '200% 100%', width, height, borderRadius: 6, animation: 'skeleton 1.4s linear infinite' }} />
);

export default Skeleton;
