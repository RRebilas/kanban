'use client';

import * as React from 'react';
import styles from './button.module.scss';
import { makeClasses } from '../../utils/css-classes';

export type ButtonProps = {
  size?: 'small' | 'large';
  color?: 'primary' | 'secondary' | 'destructive';
};

const Button = ({
  className = '',
  size = 'large',
  color = 'primary',
  children,
  ...props
}: React.ComponentProps<'button'> & ButtonProps) => {
  const classNames = makeClasses({ styles, moduleClasses: ['button', size, color], className });

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export { Button };
