import React from 'react';

import { useWindowSize } from './';

export const useGalleryBlockSize = () => {
  const [blockSize, setBlockSize] = React.useState<3 | 6 | 9>(9);

  const size = useWindowSize();

  React.useEffect(() => {
    if (size.width > 900 && blockSize !== 9) setBlockSize(9);
    else if (size.width > 500 && size.width <= 900 && blockSize !== 6) setBlockSize(6);
    else if (size.width <= 500 && blockSize !== 3) setBlockSize(3);
  }, [blockSize, size]);

  return blockSize;
};
