import React from 'react';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="page-transition" style={{ transition: 'opacity .35s ease' }}>{children}</div>;
};

export default PageTransition;
