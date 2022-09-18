import React from 'react';
import styles from './NotFound.module.scss';
import clsx from 'clsx';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => (
  <div className={styles.notFound}>NotFound Component</div>
);
