// src/components/BlogPost.tsx
import React from 'react';

interface HomeContentProps {
  header: string;
  content: string;
}

const HomeBlock: React.FC<HomeContentProps> = ({ header, content }) => (
  <div className="home-block">
    <h2>{header}</h2>
    <p>{content}</p>
  </div>
);

export default HomeBlock;