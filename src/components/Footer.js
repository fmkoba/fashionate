import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer-container container">
      <div className="footer-column">
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="footer-column">
        <h1>asdasdsaad</h1>
      </div>
      <div className="footer-column">
        <ul className="footer-links">
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
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;

