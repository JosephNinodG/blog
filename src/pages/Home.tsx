// src/pages/Home.tsx
import React from 'react';
import HomeBlock from '../components/HomeBlock';

const Home: React.FC = () => (
  <div className="home">
    <h1>Joseph Nino de Guzman</h1>
    <HomeBlock header='About Me' content='I am a Software developer currently based in Manchester, UK.' />
  </div>
);

export default Home;
