import React from 'react';
import styles from './BlogItemInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import { parseDate } from '../../utils/scripts';
import { IPostTemp, PostStyle } from '../../redux/posts/types';

interface BlogItemInfoProps {
  post: IPostTemp;
}

export const BlogItemInfo: React.FC<BlogItemInfoProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleClickAuthor = (author: string) => {
    navigate('/blog', {
      state: { search: author, style: '', coating: [], decor: [] },
    });
  };

  const handleClickStyle = (style: PostStyle) => {
    navigate('/blog', {
      state: { search: '', style: style, coating: [], decor: [] },
    });
  };

  return (
    <div className={styles.info}>
      <span>{parseDate(post.date)} |</span>
      <span className={styles.author} onClick={() => handleClickAuthor(post.author)}>
        {post.author} |
      </span>
      <span className={styles.style} onClick={() => handleClickStyle(post.style)}>
        {post.style}
      </span>
    </div>
  );
};
