import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => <div className={styles.home}>Home Component</div>;
