import React, { createContext, useContext, useState, useCallback } from 'react';

type Toast = { id: string; type: 'success' | 'error' | 'info'; title?: string; message: string };

const ToastContext = createContext<any>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((s) => [...s, { ...t, id }]);
    setTimeout(() => setToasts((s) => s.filter((x) => x.id !== id)), 4500);
  }, []);

  const remove = useCallback((id: string) => setToasts((s) => s.filter((x) => x.id !== id)), []);

  return (
    <ToastContext.Provider value={{ push, remove }}>
      {children}
      <div style={{ position: 'fixed', right: 20, top: 20, zIndex: 9999 }}>
        {toasts.map((t) => (
          <div key={t.id} style={{ marginTop: 8 }} className={`toast-item p-3 rounded-3 ${t.type === 'success' ? 'bg-success text-white' : t.type === 'error' ? 'bg-danger text-white' : 'bg-secondary text-white'}`}>
            <div className="fw-bold">{t.title}</div>
            <div className="small">{t.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx as { push: (t: Omit<Toast, 'id'>) => void; remove: (id: string) => void };
};

export default ToastProvider;
