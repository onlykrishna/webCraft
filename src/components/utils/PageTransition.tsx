import { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, [pathname]);
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 300ms ease' }}>{children}</div>
  );
};