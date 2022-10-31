import React from 'react';
import styles from './Gallery.module.scss';
import { useSearchParams } from 'react-router-dom';

import { useWindowSize } from '../../hooks';

import Filters from './Filters';
import ShowMore from './ShowMore';
import { GalleryBlock } from '../../components';
import { galleryItems } from '../../utils/constants';
import { PostStyle } from '../../redux/posts/types';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  const [searchParams] = useSearchParams();
  const [items, setItems] = React.useState(galleryItems);
  const [numberBlocks, setNumberBlocks] = React.useState(1);
  const [blockSize, setBlockSize] = React.useState<3 | 6 | 9>(9);

  const size = useWindowSize();

  React.useLayoutEffect(() => {
    if (size.width > 900) setBlockSize(9);
    else if (size.width > 500) setBlockSize(6);
    else setBlockSize(3);
  }, [size.width]);

  React.useLayoutEffect(() => {
    const filter = searchParams.get('filter') as PostStyle | null;

    setNumberBlocks(1);

    if (filter) {
      const filtredItems = galleryItems.filter((item) => item.style === filter);

      setItems(filtredItems);
    } //
    else {
      setItems(galleryItems);
    }
  }, [searchParams]);

  return (
    <main className="main">
      <div className={styles.gallery}>
        <div className="container-fluid">
          <Filters />
          {[...Array(numberBlocks)].map((_, index) => (
            <GalleryBlock
              key={index}
              loading={false}
              items={items.slice(blockSize * index, blockSize * (index + 1))}
            />
          ))}
          <ShowMore
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
