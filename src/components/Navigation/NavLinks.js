import React from 'react';
import { Link } from 'gatsby';
import './NavLinks.scss';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <Link to="/" activeClassName="active">HOME</Link>
    </li>
    <li>
      <Link to="/blog" activeClassName="active">BLOG</Link>
    </li>
    <li>
      <Link to="/contact" activeClassName="active">CONTATO</Link>
    </li>
    <li>
      <Link to="/sobre" activeClassName="active">SOBRE</Link>
    </li>
  </ul>
);

export default NavLinks;