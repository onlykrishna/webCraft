import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & { elevation?: 1 | 2 };

const Card: React.FC<Props> = ({ children, className, elevation = 1, ...rest }) => {
  const shadow = elevation === 2 ? '0 18px 50px rgba(15,23,42,0.12)' : '0 8px 28px rgba(15,23,42,0.06)';
  return (
    <div
      className={`card-3d p-3 ${className || ''}`}
      style={{ borderRadius: 24, boxShadow: shadow, background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.5))', border: '1px solid rgba(255,255,255,0.04)' }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
