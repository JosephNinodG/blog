// src/pages/Home.tsx
import React from 'react';
import NavBarContent from './NavBarContent';

const NavBar: React.FC = () => (
  <div className="navbar">
    <nav>
        <NavBarContent pagename='Home' link='/'></NavBarContent>
        <NavBarContent pagename='Blog' link='/blog'></NavBarContent>
    </nav>
  </div>
);

export default NavBar;