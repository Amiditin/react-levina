import React from 'react';
import styles from './Blog.module.scss';
import clsx from 'clsx';

interface BlogProps {}

export const Blog: React.FC<BlogProps> = () => (
  <div className={styles.blog}>Blog Component</div>
);
