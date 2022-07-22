import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:name" element={<BlogPage />} />
        <Route path="blog/create" element={<CreatePost />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
