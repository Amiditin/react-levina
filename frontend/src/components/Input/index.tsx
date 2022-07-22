import React from 'react';
import styles from './Input.module.scss';
import { UseFormRegister, Path, RegisterOptions } from 'react-hook-form';

type InputProps<T> = {
  label: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
  type?: string;
};

export const Input = <T,>(props: InputProps<T>): React.ReactElement => {
  const { label, placeholder, register, rules, type } = props;

  return (
    <div className={styles.inner}>
      <input
        {...register(label, rules)}
        className={styles.input}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
