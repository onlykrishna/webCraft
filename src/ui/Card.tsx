import { PropsWithChildren, useState } from 'react';

type Props = PropsWithChildren & { className?: string };

export const Card = ({ children, className = '' }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded shadow-sm ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ transition: 'transform .2s, box-shadow .2s', transform: hover ? 'translateY(-2px)' : 'none' }}
    >
      {children}
    </div>
  );
};