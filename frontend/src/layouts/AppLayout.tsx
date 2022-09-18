import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { fetchPosts } from '../redux/postsSlice';
// import { getCurrentUser } from '../redux/authSlice';

import { Footer, Header, Overlay } from '../components';
import { useAppDispatch } from '../hooks/redux';
import { loginUser, registerUser } from '../redux/auth/thunk';
// import { parseDate } from '../utils/scripts';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   dispatch(fetchPosts());

  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => user && dispatch(getCurrentUser({ user })));
  // }, [dispatch]);

  // const onClickRegister = () => {
  //   const options = { email: 'dima@example.com', fullName: 'DIMA', password: 'password' };

  //   dispatch(registerUser(options));
  // };

  // const onClickLogin = () => {
  //   const options = { email: 'user2@example.com', password: 'password' };

  //   dispatch(loginUser(options));
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      {/* Dev 
      <button onClick={onClickLogin}>Логин</button>
      <button onClick={onClickRegister}>Регистрация</button> 
      */}
      <Header />
      <Overlay />
      {/* <Breadcrumbs /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
