import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';

import { Button, GalleryBlock } from '../../components';
import { styles as listStyles, galleryItems } from '../../utils/constants';
import { PostStyle } from '../../redux/posts/types';
import { useSearchParams } from 'react-router-dom';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  const [items, setItems] = React.useState(galleryItems);
  const [numberBlocks, setNumberBlocks] = React.useState(1);
  const [activeFilter, setActiveFilter] = React.useState<PostStyle | null>(null);
  const [disabledButton, setDisabledButton] = React.useState(items.length <= 9);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useLayoutEffect(() => {
    const filter = searchParams.get('filter') as PostStyle | null;

    if (filter) {
      setActiveFilter(filter);
    } //
    else {
      setActiveFilter(null);
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (activeFilter) {
      setItems(galleryItems.filter((item) => item.style === activeFilter));
    } //
    else {
      setItems(galleryItems);
    }
  }, [activeFilter]);

  React.useEffect(() => {
    console.log(items);

    if (items.length <= 9) {
      setDisabledButton(false);
    } //
    else {
      setDisabledButton(true);
    }
  }, [items]);

  const handleClickFilter = (name: PostStyle) => {
    if (numberBlocks !== 1) setNumberBlocks(1);
    if (!disabledButton) setDisabledButton(false);

    if (activeFilter === name) {
      setSearchParams({});
    } //
    else {
      setSearchParams({ filter: name });
    }
  };

  const hadnleClickShowMore = () => {
    setNumberBlocks(numberBlocks + 1);

    if (items.length <= 9 * (numberBlocks + 1)) {
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
          <GalleryBlock loading={false} items={items.slice(0, 9 * numberBlocks)} />
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
