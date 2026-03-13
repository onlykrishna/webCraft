import { useEffect } from 'react';

type Props = { width?: number | string; height?: number | string; className?: string };

export const Skeleton = ({ width = '100%', height = 16, className = '' }: Props) => {
  useEffect(() => {
    const id = 'skeleton-styles';
    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = `@keyframes skeletonPulse{0%{opacity:.6}50%{opacity:.9}100%{opacity:.6}}`;
      document.head.appendChild(style);
    }
  }, []);
  return (
    <div
      className={className}
      style={{ width, height, borderRadius: 4, background: 'linear-gradient(90deg,#eee,#f5f5f5,#eee)', animation: 'skeletonPulse 1.2s ease-in-out infinite' }}
    />
  );
};