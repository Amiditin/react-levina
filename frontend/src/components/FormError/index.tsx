import React from 'react';
import styles from './FormError.module.scss';
import { FieldError } from 'react-hook-form';

interface FormErrorProps {
  error: FieldError | undefined;
}

export const FormError: React.FC<FormErrorProps> = ({ error }) => {
  return (
    <>
      {error && (
        <span className={styles.error}>
          <img src="/img/tools-icons/error.svg" alt="error" />
          {error?.message}
        </span>
      )}
    </>
  );
};
