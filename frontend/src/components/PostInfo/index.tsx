import React from 'react';
import styles from './PostInfo.module.scss';
import { useNavigate } from 'react-router-dom';

import { IPostTemp, PostStyle } from '../../redux/posts/types';
import { parseDate } from '../../utils/scripts';

interface PostInfoProps {
  post: IPostTemp;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleClickAuthor = (author: string) => {
    navigate('/blog', {
      state: { searchParams: { search: author, style: '', coating: [], decor: [] } },
    });
  };

  const handleClickStyle = (style: PostStyle) => {
    navigate('/blog', {
      state: { searchParams: { search: '', style: style, coating: [], decor: [] } },
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
