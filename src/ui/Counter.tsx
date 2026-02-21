import React, { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
  inView?: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 1500, suffix = '', prefix = '', format, inView = true }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, inView]);

  const formatted = format ? format(count) : count.toLocaleString();

  return <span>{prefix}{formatted}{suffix}</span>;
};

export default Counter;
