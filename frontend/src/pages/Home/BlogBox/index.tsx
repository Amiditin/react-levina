import React from 'react';
import styles from './BlogBox.module.scss';
import { Link } from 'react-router-dom';

import { PostInfo } from '../../../components';
import { posts } from '../../../redux/posts/posts';

interface BlogBoxProps {}

const BlogBox: React.FC<BlogBoxProps> = () => {
  // TODO: Когда появится API и возможно selectHomeBlogBoxPosts() создать
  // const { loading, posts } = useSelector((state) => state.posts);

  return (
    <section className={styles.blogBox}>
      <div className="container">
        <Link to="/blog">
          <h3 className={styles.title}>
            Больше вдохновляющих идей в нашем блоге
            <img className={styles.linkIcon} src="/img/tools-icons/link.svg" alt="link" />
          </h3>
        </Link>
        <div className={styles.items}>
          {posts.slice(0, 2).map((post) => (
            <div className={styles.item} key={post.id}>
              <Link className={styles.link} to={`/blog/${post.name}`}>
                <img className={styles.img} src={post.images[0]} alt="blog-img" />
              </Link>
              <PostInfo post={post} />
              <Link className={styles.titleLink} to={`/blog/${post.name}`}>
                <h4 className={styles.itemTitle}>
                  {post.title}
                  <img src="/img/tools-icons/link.svg" alt="link" />
                </h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBox;

// TODO: добавить скелетон
