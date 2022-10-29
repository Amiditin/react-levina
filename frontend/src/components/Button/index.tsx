import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  state?: 'black' | 'tab' | 'active';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
  onClick?: (...arg: any) => any;
}

export const Button: React.FC<ButtonProps> = ({ state, type, children, onClick, className }) => {
  return (
    <button
      className={clsx(styles.button, className, styles[`${state}`])}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};
