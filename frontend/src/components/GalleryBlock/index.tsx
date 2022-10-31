import React from 'react';
import styles from './GalleryBlock.module.scss';
import { Link } from 'react-router-dom';

import { GalleryItem } from '../../utils/constants/galleryItems/types';
interface GalleryBlockProps {
  items: GalleryItem[];
  loading: boolean;
}

// Note: Компонет мемоизировал для практики.
export const GalleryBlock = React.memo<GalleryBlockProps>(
  ({ items, loading }) => {
    return (
      <div className={styles.inner}>
        <div className={styles.items}>
          {items.map((item) => (
            <Link className={styles.item} to={`/blog/${item.link}`} key={item.id}>
              <img className={styles.img} src={item.imgUrl} alt={item.link} title={item.title} />
            </Link>
          ))}
        </div>
      </div>
    );
  },
  (prev, next) => {
    return (
      prev.loading === next.loading && JSON.stringify(prev.items) === JSON.stringify(next.items)
    );
  },
);

// TODO: Добавить скелетон
