import React from 'react';
import styles from './Gallery.module.scss';
import { URLSearchParamsInit, NavigateOptions, useSearchParams } from 'react-router-dom';

import { Button } from '../../components';
import { styles as listStyles } from '../../utils/constants';
import { PostStyle } from '../../redux/posts/types';

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = React.useState(
    searchParams.get('filter') as PostStyle | null,
  );

  const handleClickFilter = (name: PostStyle) => {
    if (activeFilter === name) {
      setActiveFilter(null);
      setSearchParams({});
    } else {
      setActiveFilter(name);
      setSearchParams({ filter: name });
    }
  };

  return (
    <div className={styles.filters}>
      {listStyles.list.map((item) => (
        <Button
          key={item.id}
          state={activeFilter === item.name ? 'active' : 'tab'}
          onClick={() => handleClickFilter(item.name)}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Filters;
