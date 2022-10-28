import React from 'react';
import styles from './GalleryBlock.module.scss';
import { Link } from 'react-router-dom';

import { GalleryItem } from '../../utils/constants/galleryItems/types';
interface GalleryBlockProps {
  items: GalleryItem[];
  loading: boolean;
}

export const GalleryBlock: React.FC<GalleryBlockProps> = ({ items, loading }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.items}>
        {/* {loading ? (
          <GalleryCellLoading />
        ) : (
          items.length &&
          Array.from({ length: count }, (_, cell) => {
            return items.slice(9 * cell, 9 * (cell + 1)).map((image, index) => (
              <Link
                className="gallery__item"
                to={`/blog/${image.postName}`}
                key={`${cell}.${index}`}>
                <img
                  className="gallery__img"
                  src={image.url}
                  alt={image.postName}
                  title={image.postTitle}
                />
              </Link>
            ));
          })
        )} */}
        {items.map((item) => (
          <Link className={styles.item} to={`/blog/${item.link}`} key={item.id}>
            <img className={styles.img} src={item.imgUrl} alt={item.link} title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// TODO: Добавить скелетон
