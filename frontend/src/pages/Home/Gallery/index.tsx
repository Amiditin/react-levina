import React from 'react';
import styles from './Gallery.module.scss';
import { Link } from 'react-router-dom';

import { useGalleryBlockSize } from '../../../hooks';

import { GalleryBlock } from '../../../components';
import { galleryItems } from '../../../utils/constants/galleryItems';

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const blockSize = useGalleryBlockSize();

  return (
    <div className={styles.gallery}>
      <Link to="/gallery">
        <h3 className={styles.title} title="Галерея">
          Завораживающая галерея
          <img className={styles.linkIcon} src="/img/tools-icons/link.svg" alt="link" />
        </h3>
      </Link>
      <div className="container-fluid">
        <GalleryBlock loading={false} items={galleryItems.slice(0 * blockSize, 1 * blockSize)} />
      </div>
    </div>
  );
};

export default Gallery;
