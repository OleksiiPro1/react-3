import { useState } from 'react';
import BlogList from './BlogList';

export default function Training() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Lorem Ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'Lorem Ipsum...', yoshi: 'mario', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'Lorem Ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
    </div>
  );
}
