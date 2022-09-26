import React from 'react';
import styles from './Collection.module.scss';
import clsx from 'clsx';
import { useAppSelector } from '../../hooks/redux';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks';

interface CollectionProps {}

export const Collection: React.FC<CollectionProps> = () => {
  const { items, status } = useAppSelector((state) => state.posts);
  const [collectionScrollLeft, setCollectionScrollLeft] = React.useState(0);

  const collectionRef = React.useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  React.useEffect(() => {
    if (collectionRef.current) setCollectionScrollLeft(collectionRef.current.scrollLeft);
  }, [collectionRef]);

  const onClickArrow = (offset: number) => {
    if (collectionRef.current) {
      let scrollLeft = collectionScrollLeft + offset;
      let maxScrollWidth = collectionRef.current.scrollWidth - collectionRef.current.clientWidth;

      if (scrollLeft > 0 && scrollLeft < maxScrollWidth) {
        setCollectionScrollLeft(scrollLeft);
        collectionRef.current.scroll({ left: scrollLeft, behavior: 'smooth' });
      } else if (scrollLeft >= maxScrollWidth && collectionScrollLeft !== maxScrollWidth) {
        setCollectionScrollLeft(maxScrollWidth);
        collectionRef.current.scroll({ left: maxScrollWidth, behavior: 'smooth' });
      } else if (scrollLeft <= 0 && collectionScrollLeft !== 0) {
        setCollectionScrollLeft(0);
        collectionRef.current.scroll({ left: 0, behavior: 'smooth' });
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
      {status === 'success' ? (
        <div className={styles.collection}>
          {size.width > 560 && <ArrowLeft />}
          <div className={styles.items} ref={collectionRef}>
            {items &&
              items.slice(0, 10).map((post) => (
                <Link className={styles.item} to={`/blog/${post.name}`} key={post.id}>
                  <img className={styles.img} src={post.images[0]} alt="collection-img" />
                  <div className={styles.info}>
                    <h6 className={styles.title}>{post.title}</h6>
                    <p className={styles.text}>{post.style}</p>
                  </div>
                </Link>
              ))}
          </div>
          {size.width <= 560 && <ArrowLeft />}
          <div
            className={clsx(
              styles.arrow,
              collectionRef.current &&
                collectionScrollLeft ===
                  collectionRef.current.scrollWidth - collectionRef.current.clientWidth &&
                styles.disabled,
            )}
            onClick={() => onClickArrow(size.width <= 560 ? 330 : 380)}>
            <img src="/img/tools-icons/arrow-big-right.svg" alt="arrow" />
          </div>
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  );
};
