'use client';

import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Children, ComponentProps, isValidElement, PropsWithChildren } from 'react';

import ArrowDown from '@kanban/ui/src/assets/arrow-down.svg';

import styles from './dropdown.module.scss';

export type DropdownProps = {
  label?: string;
  name: string;
  registerOptions?: RegisterOptions;
};

export const Dropdown = ({
  label,
  name,
  children,
  registerOptions,
  ...props
}: PropsWithChildren<DropdownProps> & ComponentProps<'select'>) => {
  const options = Children.toArray(children).filter(
    (child) => isValidElement(child) && (child.type === 'option' || child.type === Option)
  );

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles['dropdown']}>
      {label && (
        <label htmlFor={'select'} className={styles['label']}>
          {label}
        </label>
      )}
      <div className={styles['dropdown-wrapper']}>
        <select className={styles['dropdown-select']} {...props} {...register(name, { ...registerOptions })}>
          {options}
        </select>
        <span className={styles['dropdown-arrow']}>
          <ArrowDown />
        </span>
      </div>
      {errors && <span className={styles['error-container']}>{errors[name]?.message?.toString()}</span>}
    </div>
  );
};

export const Option = <T extends string | number | object>({ content, value }: { content: string; value: T }) => {
  const valueString = typeof value === 'object' && !!value ? JSON.stringify(value) : value?.toString() || '';

  return <option value={valueString}>{content}</option>;
};
