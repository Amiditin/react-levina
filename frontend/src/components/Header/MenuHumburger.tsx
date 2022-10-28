import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { IMenuItem } from '../../utils/constants/menu/types';

interface MenuHumburgerProps {
  menu: IMenuItem[];
}

const MenuHumburger: React.FC<MenuHumburgerProps> = ({ menu }) => {
  const [leftsideMenuOpened, setLeftsideMenuOpened] = React.useState(false);

  return (
    <>
      <div className={clsx(styles.overlay, leftsideMenuOpened && styles.visible)}>
        <div className={clsx(styles.leftsideMenu)}>
          <nav className={styles.menu}>
            {menu.map((item, index) => (
              <NavLink
                className={({ isActive }) => clsx(styles.item, isActive && styles.active)}
                key={index}
                to={item.path}
                onClick={() => setLeftsideMenuOpened(false)}>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.iconHumburger}>
        <input
          className={styles.checkbox}
          type="checkbox"
          title="Меню"
          checked={leftsideMenuOpened}
          onChange={() => setLeftsideMenuOpened(!leftsideMenuOpened)}
        />
        <div className={styles.lines}>
          <span className={clsx(styles.line, styles.lineTop)} />
          <span className={clsx(styles.line, styles.lineMid)} />
          <span className={clsx(styles.line, styles.lineBot)} />
        </div>
      </div>
      <nav className={styles.menu}>
        <NavLink to={menu[0].path}>
          <img className={styles.logo} src="/img/logo.png" alt="logo" />
        </NavLink>
      </nav>
    </>
  );
};

export default MenuHumburger;

// TODO: отключить скролл при открытии меню
