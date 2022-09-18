import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => (
  <div className={styles.gallery}>Gallery Component</div>
);
