import React from 'react';
import styles from './Collection.module.scss';

interface SkeletonProps {}

export const Skeleton: React.FC<SkeletonProps> = () => {
  return <div className={styles.skeleton}>Skeleton Component</div>;
};
