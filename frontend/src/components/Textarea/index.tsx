import React from 'react';
import styles from './Textarea.module.scss';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface TextareaProps<T extends FieldValues> {
  label: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
}

export const Textarea = <T extends FieldValues>(props: TextareaProps<T>): React.ReactElement => {
  const { label, placeholder, register, rules } = props;

  return (
    <textarea {...register(label, rules)} className={styles.textarea} placeholder={placeholder} />
  );
};
