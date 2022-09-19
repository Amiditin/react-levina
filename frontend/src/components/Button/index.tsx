import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  state?: 'black' | 'tab' | 'active';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ state, type, children }) => {
  return (
    <button type={type} className={clsx(styles.button, styles[`${state}`])}>
      {children}
    </button>
  );
};
