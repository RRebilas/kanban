'use client';

import { RegisterOptions, useFormContext } from 'react-hook-form';

import styles from './text-field.module.scss';
import { ComponentProps } from 'react';

type TextFieldProps = { name: string; type: 'text' | 'password' | 'email'; options?: RegisterOptions };

const TextField = ({ name, options, ...props }: ComponentProps<'input'> & TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles['text-field']}>
      <input {...register(name, { ...options })} {...props} />

      {errors[name] && <span className={styles['error-container']}>{errors[name]?.message?.toString()}</span>}
    </div>
  );
};

export { TextField };
