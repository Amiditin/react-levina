import React from 'react';
import styles from './Input.module.scss';
import { UseFormRegister, Path, RegisterOptions, FieldValues } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  label: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
  type?: string;
  clearButton?: boolean;
};

export const Input = <T extends FieldValues>(props: InputProps<T>): React.ReactElement => {
  const { label, placeholder, register, rules, type, clearButton = true } = props;
  const [value, setValue] = React.useState<string>('');

  return (
    <div className={styles.inner}>
      <input
        {...register(label, rules)}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {clearButton && value && (
        <img
          className={styles.clearIcon}
          src="/img/tools-icons/close.svg"
          alt="clear"
          onClick={() => setValue('')}
        />
      )}
    </div>
  );
};
