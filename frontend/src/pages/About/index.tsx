import React from 'react';
import styles from './About.module.scss';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return <div className={styles.about}>About Component</div>;
};
