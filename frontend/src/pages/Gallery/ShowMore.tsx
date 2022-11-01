import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';

interface ShowMoreProps {
  itemsLength: number;
  blockSize: number;
  numberBlocks: number;
  setNumberBlocks: React.Dispatch<React.SetStateAction<number>>;
}

const ShowMore: React.FC<ShowMoreProps> = ({
  itemsLength,
  blockSize,
  numberBlocks,
  setNumberBlocks,
}) => {
  const [disabledButton, setDisabledButton] = React.useState(itemsLength <= blockSize);

  React.useEffect(() => {
    setDisabledButton(itemsLength <= blockSize);
  }, [itemsLength, blockSize]);

  const handleClickShowMore = () => {
    setNumberBlocks(numberBlocks + 1);

    if (itemsLength <= blockSize * (numberBlocks + 1)) {
      setDisabledButton(true);
    }
  };

  return (
    <button
      className={clsx(styles.showMoreBtn, disabledButton && styles.disabled)}
      onClick={handleClickShowMore}>
      Показать ещё
    </button>
  );
};

export default ShowMore;
