import React from 'react';
import styles from './Home.module.scss';

import Posts from './Posts';

import { posts } from '../../../redux/posts/posts';

interface BlogProps {}

export const Blog: React.FC<BlogProps> = () => {
  const currentPage = 1;

  return (
    <main className="main">
      <div className="container">
        <div className={styles.blog}>
          <div className={styles.items}>
            {posts.length !== 0 ? (
              <>
                <Posts posts={posts.slice((currentPage - 1) * 3, currentPage * 3)} />
                {/* <BlogPagination count={Math.ceil(filteredPosts.length / 3)} /> */}
              </>
            ) : (
              <div className={styles.notFound}>
                <h1 className={styles.title}>Ошибка поиска</h1>
                <p className={styles.text}>Не удалось найти посты</p>
              </div>
            )}
          </div>
          {/* <Aside /> */}
        </div>
      </div>
    </main>
  );
};
