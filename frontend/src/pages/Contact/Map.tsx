import React from 'react';
import { useWindowSize } from '../../hooks';
import styles from './Contact.module.scss';

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const [mapHeight, setMapHeight] = React.useState(580);

  const size = useWindowSize();

  React.useEffect(() => {
    setMapHeight(0.15 * (size.width - 1900) + 580);
  }, [size]);

  return (
    <div className={styles.map}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A34d13a2711cdc0c2a6f105e4f197253a9013452280fa716a2b83cb9b071cd274&amp;source=constructor"
        title="HSE map"
        width="100%"
        height={mapHeight}
        frameBorder="0"
      />
    </div>
  );
};

export default Map;
