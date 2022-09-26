import React from 'react';
import styles from './TypePageComponent.module.scss';

interface TypePageComponentProps {}

export const TypePageComponent: React.FC<TypePageComponentProps> = () => {
  return <div className={styles.typePageComponent}>TypePageComponent Component</div>;
};
