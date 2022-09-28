import React from 'react';
import styles from './Collection.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useWindowSize } from '../../hooks';

import Skeleton from './Skeleton';

interface CollectionProps {}

export const Collection: React.FC<CollectionProps> = () => {
  const numberItems = 10;
  const { items, status } = useAppSelector((state) => state.posts);
  const [collectionScrollLeft, setCollectionScrollLeft] = React.useState(0);

  const itemsRef = React.useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  React.useEffect(() => {
    if (itemsRef.current) setCollectionScrollLeft(itemsRef.current.scrollLeft);
  }, [itemsRef]);

  const onClickArrow = (offset: number) => {
    if (itemsRef.current) {
      let scrollLeft = collectionScrollLeft + offset;
      let maxScrollWidth = itemsRef.current.scrollWidth - itemsRef.current.clientWidth;

      if (scrollLeft > 0 && scrollLeft < maxScrollWidth) {
        setCollectionScrollLeft(scrollLeft);
        itemsRef.current.scroll({ left: scrollLeft, behavior: 'smooth' });
      } //
      else if (scrollLeft >= maxScrollWidth && collectionScrollLeft !== maxScrollWidth) {
        setCollectionScrollLeft(maxScrollWidth);
        itemsRef.current.scroll({ left: maxScrollWidth, behavior: 'smooth' });
      } //
      else if (scrollLeft <= 0 && collectionScrollLeft !== 0) {
        setCollectionScrollLeft(0);
        itemsRef.current.scroll({ left: 0, behavior: 'smooth' });
      }
    }
  };

  const ArrowLeft = (): JSX.Element => (
    <div
      className={clsx(styles.arrow, collectionScrollLeft === 0 && styles.disabled)}
      onClick={() => onClickArrow(size.width <= 560 ? -330 : -380)}>
      <img src="/img/tools-icons/arrow-big-left.svg" alt="arrow" />
    </div>
  );

  return (
    <div className="container-fluid">
      <div className={styles.collection}>
        {size.width > 560 && <ArrowLeft />}
        {status === 'success' ? (
          <div className={styles.items} ref={itemsRef}>
            {items &&
              items.slice(0, numberItems).map((post) => (
                <Link className={styles.item} to={`/blog/${post.name}`} key={post.id}>
                  <img className={styles.img} src={post.images[0]} alt="collection-img" />
                  <div className={styles.info}>
                    <h6 className={styles.title}>{post.title}</h6>
                    <p className={styles.text}>{post.style}</p>
                  </div>
                </Link>
              ))}
          </div>
        ) : (
          <div className={styles.items} ref={itemsRef}>
            {Array.from({ length: numberItems }, () => (
              <Skeleton size={size.width > 560 ? 350 : 300} />
            ))}
          </div>
        )}
        {size.width <= 560 && <ArrowLeft />}
        <div
          className={clsx(
            styles.arrow,
            itemsRef.current &&
              collectionScrollLeft ===
                itemsRef.current.scrollWidth - itemsRef.current.clientWidth &&
              styles.disabled,
          )}
          onClick={() => onClickArrow(size.width <= 560 ? 330 : 380)}>
          <img src="/img/tools-icons/arrow-big-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

// TODO: переделать collectionScrollLeft на useRef
