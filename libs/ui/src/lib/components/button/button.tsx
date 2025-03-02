import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  type: React.ButtonHTMLAttributes<unknown>['type'];
  children: React.ReactNode;
  size?: 'small' | 'large';
  onClick?: () => void;
  className?: string;
};

export function Button({ children, type, className, size = 'large', onClick }: ButtonProps) {
  return (
    <button type={type} className={`${className} ${styles.button} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}
