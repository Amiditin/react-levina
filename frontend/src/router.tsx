import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { MainLayout, BreadcrumbsLayout } from './layouts';
import { About, Blog, Contact, Gallery, Home, NotFound } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="" element={<BreadcrumbsLayout />}>
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />}>
          <Route path="create" element={<Blog />} />
        </Route>
      </Route>
      {/* <Route path="blog/:name" element={<BlogPage />} /> */}
    </Route>,
  ),
);

export default router;
