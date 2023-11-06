// src/components/BlogPost.tsx
import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  para1: string;
  para2: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, para1, para2 }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <h4>{date}</h4>
    <p>{para1}</p>
    <p>{para2}</p>
  </div>
);

export default BlogPost;
