import React from 'react';
import styles from './BreadcrumbsLayout.module.scss';
import { Outlet, useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';

export const BreadcrumbsLayout: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1).split('/');

  return (
    <>
      {pathname !== '/' && (
        <div
          className={clsx(
            styles.breadcrumbs,
            (path[0] === 'about' || path[0] === 'contact') && styles.bgDisabled,
          )}>
          <div className="container">
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Home
                </Link>
              </li>
              {path.slice(0, -1).map((item, index) => (
                <li className={styles.item} key={index}>
                  <Link className={styles.link} to={`/${item}`}>
                    {item[0].toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
              <li className={styles.item}>
                {path[path.length - 1][0].toUpperCase() + path[path.length - 1].slice(1)}
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
