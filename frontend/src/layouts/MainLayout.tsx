import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
// import { fetchPosts } from '../redux/postsSlice';
// import { getCurrentUser } from '../redux/authSlice';

import { Footer, Header, Overlay } from '../components';
// import { useAppDispatch } from '../hooks/redux';
// import { loginUser, registerUser } from '../redux/auth/thunk';

export const MainLayout: React.FC = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPosts());

  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => user && dispatch(getCurrentUser({ user })));
  // }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Overlay />
      {/* <Breadcrumbs /> */}
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
