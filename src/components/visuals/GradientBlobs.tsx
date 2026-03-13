import React from 'react';

const GradientBlobs: React.FC = () => (
  <svg width="100%" height="400" viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.28"/>
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.18"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="40"/></filter>
    </defs>
    <g filter="url(#blur)">
      <ellipse cx="120" cy="80" rx="180" ry="60" fill="url(#g1)" />
      <ellipse cx="680" cy="260" rx="220" ry="90" fill="#7c3aed" fillOpacity="0.12" />
      <ellipse cx="420" cy="120" rx="120" ry="50" fill="#06b6d4" fillOpacity="0.08" />
    </g>
  </svg>
);

export default GradientBlobs;
