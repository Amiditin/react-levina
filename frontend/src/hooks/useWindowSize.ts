import React from 'react';

interface IWindowSize {
  width: number;
  heigth: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<IWindowSize>({
    width: window.innerWidth,
    heigth: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
