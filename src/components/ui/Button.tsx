import { ButtonHTMLAttributes } from 'react';

export const Button = ({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`btn btn-primary ${className}`.trim()} {...props} />
);
