'use client';

import { useState } from 'react';
import styles from './subtask-checkbox.module.scss';

export type SubtaskCheckboxProps = {
  content: string;
  checked?: boolean;
};

export const SubtaskCheckbox = ({ content, checked }: SubtaskCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div
      className={`${styles['subtask-checkbox']} ${isChecked && styles['checked']}`}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span className={styles['content']}>{content}</span>
    </div>
  );
};
