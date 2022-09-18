import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { IMenuItem } from '../../utils/constants/menu/types';

interface MenuHorizontalProps {
  menu: IMenuItem[];
}

const MenuHorizontal: React.FC<MenuHorizontalProps> = ({ menu }) => {
  const renderMenuItem = (item: IMenuItem, index: number): JSX.Element => (
    <NavLink
      className={({ isActive }) => clsx(styles.item, isActive && styles.active)}
      key={index}
      to={item.path}>
      <span>{item.name}</span>
    </NavLink>
  );

  return (
    <>
      <nav className={styles.menu}>
        {menu.slice(1, 3).map(renderMenuItem)}
        <NavLink to={menu[0].path}>
          <img className={styles.logo} src="/img/logo.png" alt="logo" />
        </NavLink>
        {menu.slice(3).map(renderMenuItem)}
      </nav>
    </>
  );
};

export default MenuHorizontal;
