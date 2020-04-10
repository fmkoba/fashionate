import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSection from '../components/Home/MainSection';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
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
                  fluid(maxWidth : 800) {
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
        <MainSection posts={data.allMarkdownRemark.edges}/>
      </Layout>
    </>
  )
}

export default IndexPage
