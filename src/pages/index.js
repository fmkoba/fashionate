import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSection from '../components/Home/MainSection';

const IndexPage = () => {

  return (
    <>
      <div id="drawer-hook"></div>
      <Layout>
        <SEO title="Fashionate - Home" />
        <MainSection className="home"/>
      </Layout>
    </>
  )
}

export default IndexPage
