import React from 'react';
import styles from './Blog.module.scss';

interface BlogProps {}

export const Blog: React.FC<BlogProps> = () => {
  return <div className={styles.blog}>Blog Component</div>;
};
