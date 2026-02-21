import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  error?: string | null;
}

const Input: React.FC<Props> = ({ label, helper, error, id, ...rest }) => {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className="mb-3">
      {label && <label htmlFor={inputId} className="form-label">{label}</label>}
      <input id={inputId} className={`form-control ${error ? 'is-invalid' : ''}`} {...rest} />
      {error ? <div className="invalid-feedback">{error}</div> : helper ? <div className="form-text">{helper}</div> : null}
    </div>
  );
};

export default Input;
