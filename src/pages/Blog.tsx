// src/pages/Home.tsx
import React from 'react';
import BlogList from '../components/BlogList';
import { blogPosts } from '../data/posts';

const Blog: React.FC = () => (
  <div className="blog">
    <h1>Blog</h1>
    <BlogList posts={blogPosts} />
  </div>
);

export default Blog;
