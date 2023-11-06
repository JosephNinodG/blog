// src/components/BlogList.tsx
import React from 'react';
import BlogPost from './BlogPost';

interface BlogListProps {
  posts: { title: string; date: string; para1: string; para2: string }[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div className="blog-list">
    {posts.map((post, index) => (
      <BlogPost key={index} title={post.title} date={post.date} para1={post.para1} para2={post.para2} />
    ))}
  </div>
);

export default BlogList;
