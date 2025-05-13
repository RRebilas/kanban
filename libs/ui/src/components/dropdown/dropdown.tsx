'use client';

import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Children, ComponentProps, isValidElement, PropsWithChildren } from 'react';

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

  const formContext = useFormContext();

  const register = formContext?.register;
  const errors = formContext?.formState?.errors;

  return (
    <div className={styles['dropdown']}>
      {label && (
        <label htmlFor={name} className={styles['select']}>
          {label}
        </label>
      )}
      <div className={styles['select-wrapper']}>
        <select
          id={name}
          {...props}
          {...(register ? register(name, { ...registerOptions }) : {})}
        >
          {options}
        </select>
        <div className={styles['select-arrow']}></div>
      </div>
      {errors && errors[name] && (
        <span className={styles['error-container']}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export const Option = <T extends string | number | object>({ content, value }: { content: string; value: T }) => {
  const valueString = typeof value === 'object' && !!value ? JSON.stringify(value) : value?.toString() || '';

  return <option value={valueString}>{content}</option>;
};
