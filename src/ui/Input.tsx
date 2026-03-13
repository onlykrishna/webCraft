import { InputHTMLAttributes } from 'react';

type Props = {
  label?: string;
  helper?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, helper, error, className = '', ...rest }: Props) => (
  <div className={className}>
    {label && <div className="form-label">{label}</div>}
    <input className={`form-control ${error ? 'is-invalid' : ''}`} {...rest} />
    {helper && !error && <div className="form-text">{helper}</div>}
    {error && <div className="invalid-feedback d-block">{error}</div>}
  </div>
);