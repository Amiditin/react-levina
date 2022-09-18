import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/AppLayout';
import { About, Blog, Contact, Gallery, Home, NotFound } from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        {/* <Route path="blog/:name" element={<BlogPage />} />
        <Route path="blog/create" element={<CreatePost />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
