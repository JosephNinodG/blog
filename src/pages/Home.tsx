// src/pages/Home.tsx
import React from 'react';
import HomeBlock from '../components/HomeBlock';

const Home: React.FC = () => (
  <div className="home">
    <h1>Joseph Nino de Guzman</h1>
    <HomeBlock header='About Me' content='Software developer currently based in Manchester, UK.' />
    <HomeBlock header='Experience' content='Working in IT Consultancy, primarily as a back-end engineer.' />
    <HomeBlock header='Projects' content='Drawing, writing and world-building.' />
  </div>
);

export default Home;