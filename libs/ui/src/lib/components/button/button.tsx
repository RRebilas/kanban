import React from 'react';
import styles from './button.module.scss';
import { makeClasses } from '../../utils/css-classes';

export type ButtonProps = {
  type: React.ButtonHTMLAttributes<unknown>['type'];
  children: React.ReactNode;
  size?: 'small' | 'large';
  color: 'primary' | 'secondary' | 'destructive';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  type,
  className = '',
  size = 'large',
  color,
  disabled = false,
  onClick,
}: ButtonProps) {
  const classNames = makeClasses({ styles, moduleClasses: ['button', size, color], className });

  return (
    <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
