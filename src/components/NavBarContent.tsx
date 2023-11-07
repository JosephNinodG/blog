import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarContentProps {
  pagename: string;
  link: string;
}

const NavBarContent: React.FC<NavBarContentProps> = ({ pagename, link }) => (
  <div className="navbar-content-block">
    <Link className='navlink' to={link}>{pagename}</Link>
  </div>
);

export default NavBarContent;
