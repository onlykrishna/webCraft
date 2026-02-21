import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'outline'; icon?: React.ReactNode };

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, icon, ...rest }) => {
  const base = 'btn d-inline-flex align-items-center justify-content-center';
  const variantClass = variant === 'primary' ? 'wc-btn-primary' : variant === 'outline' ? 'btn-outline-secondary' : 'btn-ghost';

  return (
    <button className={`${base} ${variantClass} ${className || ''}`} {...rest}>
      {icon && <span className="me-2 d-inline-flex">{icon}</span>}
      <span className="btn-label">{children}</span>
    </button>
  );
};

export default Button;
