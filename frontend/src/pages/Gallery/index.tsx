import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';

import { Button, GalleryBlock } from '../../components';
import { styles as listStyles, galleryItems } from '../../utils/constants';
import { PostStyle } from '../../redux/posts/types';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  const [numberBlocks, setNumberBlocks] = React.useState(1);
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const [disabledButton, setDisabledButton] = React.useState(galleryItems.length <= 9);

  const handleClickFilter = (name: PostStyle) => {
    setNumberBlocks(1);
    setDisabledButton(false);

    if (activeFilter === name) {
      setActiveFilter(null);
    } //
    else {
      setActiveFilter(name);
    }
  };

  const hadnleClickShowMore = () => {
    setNumberBlocks(numberBlocks + 1);

    if (galleryItems.length <= 9 * (numberBlocks + 1)) {
      setDisabledButton(true);
    }
  };

  return (
    <main className="main">
      <div className={styles.gallery}>
        <div className="container-fluid">
          <div className={styles.tabs}>
            {listStyles.list.map((item) => {
              return (
                <Button
                  key={item.id}
                  state={activeFilter === item.name ? 'active' : 'tab'}
                  onClick={() => handleClickFilter(item.name)}>
                  {item.name}
                </Button>
              );
            })}
          </div>
          <GalleryBlock loading={false} items={galleryItems.slice(0, 9 * numberBlocks)} />
          <button
            className={clsx(styles.showMoreBtn, disabledButton && styles.disabled)}
            onClick={hadnleClickShowMore}>
            Показать ещё
          </button>
        </div>
      </div>
    </main>
  );
};
