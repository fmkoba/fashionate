import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => (
  <header className="main-header">{props.children}</header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
