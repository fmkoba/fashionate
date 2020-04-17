import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import MainSection from '../components/Home/MainSection';
import Nameless from '../components/Home/Nameless';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              date
              path
              title
              tags
              image {
                absolutePath
                childImageSharp {
                  fixed(width : 700, height: 350 ) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
            id
          }
        }
      }
    }
  `);

  return (
    <>
      <div id="drawer-hook"></div>
      <Layout>
        <SEO title="Home" />
        {/* <MainSection posts={data.allMarkdownRemark.edges}/> */}
        <Nameless posts={data.allMarkdownRemark.edges}/>
      </Layout>
    </>
  )
}

export default IndexPage
