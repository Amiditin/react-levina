import React from 'react';
import styles from './Gallery.module.scss';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  return <div className={styles.gallery}>Gallery Component</div>;
};
