import React from 'react';
import styles from './Gallery.module.scss';
import { useSearchParams } from 'react-router-dom';

import { useGalleryBlockSize } from '../../hooks';

import { GalleryBlock } from '../../components';
import { galleryItems } from '../../utils/constants';
import { PostStyle } from '../../redux/posts/types';

import FiltersTabs from './Filters';
import ShowMoreButton from './ShowMore';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  const blockSize = useGalleryBlockSize();
  const [searchParams] = useSearchParams();
  const [items, setItems] = React.useState(galleryItems);
  const [numberBlocks, setNumberBlocks] = React.useState(1);

  React.useLayoutEffect(() => {
    const filter = searchParams.get('filter') as PostStyle | null;

    setNumberBlocks(1);

    if (!filter) {
      setItems(galleryItems);
      return;
    }

    setItems(galleryItems.filter((item) => item.style === filter));
  }, [searchParams]);

  return (
    <main className="main">
      <div className={styles.gallery}>
        <div className="container-fluid">
          <FiltersTabs />
          {[...Array(numberBlocks)].map((_, index) => (
            <GalleryBlock
              key={index}
              loading={false}
              items={items.slice(blockSize * index, blockSize * (index + 1))}
            />
          ))}
          <ShowMoreButton
            itemsLength={items.length}
            blockSize={blockSize}
            numberBlocks={numberBlocks}
            setNumberBlocks={setNumberBlocks}
          />
        </div>
      </div>
    </main>
  );
};
