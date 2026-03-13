import { PropsWithChildren, useState, HTMLAttributes } from 'react';

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement> & { className?: string; elevation?: number };

export const Card = ({ children, className = '', elevation = 1, ...props }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded shadow-sm ${className}`}
      onMouseEnter={(e) => { setHover(true); props.onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); props.onMouseLeave?.(e); }}
      style={{ transition: 'transform .2s, box-shadow .2s', transform: hover ? `translateY(-${elevation * 2}px)` : 'none', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};export default Card;
