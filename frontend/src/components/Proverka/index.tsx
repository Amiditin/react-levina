import React from 'react';
import styles from './Proverka.module.scss';
import clsx from 'clsx';

interface ProverkaProps {}

export const Proverka: React.FC<ProverkaProps> = () => (
  <div className={styles.proverka}>Proverka Component</div>
);
