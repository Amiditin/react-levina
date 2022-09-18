import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { useAppDispatch } from '../../hooks/redux';
import { setOverlayOpened } from '../../redux/overlay/slice';

import MenuHorizontal from './MenuHorizontal';
import MenuHumburger from './MenuHumburger';

import { menu } from '../../utils/constants';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [menuStyle, setMenuStyle] = React.useState<'horizontal' | 'humburger'>('horizontal');

  React.useEffect(() => {
    const trackWindowWidth = () => {
      if (window.innerWidth > 700 && menuStyle === 'humburger') {
        setMenuStyle('horizontal');
      } else if (window.innerWidth <= 700 && menuStyle === 'horizontal') {
        setMenuStyle('humburger');
      }
    };

    trackWindowWidth();

    window.addEventListener('resize', trackWindowWidth);

    return () => window.removeEventListener('resize', trackWindowWidth);
  }, [menuStyle]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.box}>
          {menuStyle === 'humburger' && <MenuHumburger menu={menu} />}
          {menuStyle === 'horizontal' && <MenuHorizontal menu={menu} />}
          <img
            className={clsx(
              styles.icon,
              menuStyle === 'horizontal' && styles.iconLoginMenuHorizontal,
            )}
            src="/img/tools-icons/icon-login.svg"
            alt="login"
            title="Авторизация"
            onClick={() => dispatch(setOverlayOpened(true))}
          />
        </div>
      </div>
    </header>
  );
};
