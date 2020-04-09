import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import MainNavigation from "./Navigation/MainNavigation";
import Footer from "./Footer";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="drawer-hook"></div>
      <div id="backdrop-hook"></div>
      <MainNavigation siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
