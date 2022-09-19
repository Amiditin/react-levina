import React from 'react';
import styles from './NotFound.module.scss';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <main className="main">
      <div className="container">
        <div className={styles.notFound}>
          <h3 className={styles.title}>404</h3>
          <p className={styles.text}>Эта страница не была найдена!</p>
        </div>
      </div>
    </main>
  );
};
