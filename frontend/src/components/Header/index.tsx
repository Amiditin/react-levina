import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setOverlayOpened } from '../../redux/overlay/slice';

import { menu } from '../../utils/constants';
import { IMenu } from '../../utils/constants/menu/types';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const renderMenuItem = (item: IMenu, index: number): JSX.Element => (
    <NavLink
      className={({ isActive }) => clsx(styles.item, isActive && styles.active)}
      key={index}
      to={item.path}>
      <span>{item.name}</span>
    </NavLink>
  );

  return (
    <div className="container">
      <header className={styles.header}>
        <nav className={styles.menu}>
          {menu.slice(1, 3).map((item, index) => renderMenuItem(item, index))}
          <NavLink to={menu[0].path}>
            <img className={styles.logo} src="/img/logo.png" alt="logo" />
          </NavLink>
          {menu.slice(3).map((item, index) => renderMenuItem(item, index))}
          <img
            className={styles.iconLogin}
            src="/img/tools-icons/icon-login.svg"
            alt="login"
            onClick={() => dispatch(setOverlayOpened(true))}
          />
        </nav>
      </header>
    </div>
  );
};
