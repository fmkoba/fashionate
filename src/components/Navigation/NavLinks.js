import React from 'react';
import { Link } from 'gatsby';
import './NavLinks.scss';
import logo from  '../../images/logo.png';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <Link to="/" activeClassName="active">HOME</Link>
    </li>
    <li>
      <Link to="/sobre" activeClassName="active">SOBRE</Link>
    </li>
    <li>
      <Link to="/sobre" activeClassName="active">SERVIÇOS</Link>
    </li>
    <li><img src={logo} alt=""/></li>
    <li>
      <Link to="/contact" activeClassName="active">E-SHOP</Link>
    </li>
    <li>
      <Link to="/contact" activeClassName="active">CONTATO</Link>
    </li>
    <li>
      <Link to="/blog" activeClassName="active">BLOG</Link>
    </li>
  </ul>
);

export default NavLinks;