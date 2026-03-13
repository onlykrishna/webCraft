import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ open, onClose, children }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;
  return createPortal(
    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,.5)' }} onClick={onClose}>
      <div className="container h-100 d-flex align-items-center" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded shadow p-4 w-100">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};