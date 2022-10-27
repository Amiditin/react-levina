import React from 'react';
import styles from './BlogBox.module.scss';
import { Link } from 'react-router-dom';
import { posts } from '../../../redux/posts/posts';
import { BlogItemInfo } from '../../../components';

interface BlogBoxProps {}

const BlogBox: React.FC<BlogBoxProps> = () => {
  // const { loading, posts } = useSelector((state) => state.posts);
  const loading = false;

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
          {loading ? (
            <>
              {/* <BlogBoxLoading />
              <BlogBoxLoading /> */}
            </>
          ) : (
            <>
              {posts.slice(0, 2).map((post) => (
                <div className={styles.item}>
                  <Link className={styles.link} to={`/blog/${post.name}`}>
                    <img className={styles.img} src={post.images[0]} alt="blog-img" />
                  </Link>
                  <BlogItemInfo post={post} />
                  <Link className={styles.titleLink} to={`/blog/${post.name}`}>
                    <h4 className={styles.itemTitle}>
                      {post.title}
                      <img src="/img/tools-icons/link.svg" alt="link" />
                    </h4>
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogBox;
