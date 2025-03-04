'use client';

import * as React from 'react';
import styles from './text-field.module.scss';

type TextFieldProps = { type: 'text' | 'password' | 'email' };

const TextField = ({ ...props }: React.ComponentProps<'input'> & TextFieldProps) => {
  return (
    <div className={styles['text-field']}>
      <input {...props} />
      {/*TODO: figure out how to display errors*/}
      {/*<span></span>*/}
    </div>
  );
};

export { TextField };
