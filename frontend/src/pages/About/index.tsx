import React from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => (
  <div className={styles.about}>About Component</div>
);
