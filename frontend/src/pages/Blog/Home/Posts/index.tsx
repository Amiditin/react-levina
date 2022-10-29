import React from 'react';
import styles from './Posts.module.scss';
import { Link, useLocation } from 'react-router-dom';

import { BlogItemInfo } from '../../../../components';
import { IPostTemp } from '../../../../redux/posts/types';

interface PostsProps {
  posts: IPostTemp[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const location = useLocation();

  return (
    <>
      {posts.map((post) => (
        <div className={styles.item} key={post.id}>
          {post.images[0] && (
            <Link to={`/blog/${post.name}${location.search}`}>
              <img className={styles.img} src={post.images[0]} alt="img" />
            </Link>
          )}
          <BlogItemInfo post={post} />
          <Link to={`/blog/${post.name}${location.search}`}>
            <h3 className={styles.title}>{post.title}</h3>
          </Link>
          <p className={styles.text}>{post.text}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
