import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
  console.log(data.allMarkdownRemark.edges);

  return <Layout>
    <SEO title="Home" />

    {
      data.allMarkdownRemark.edges.map((item) => {
        const { title, date, path, image } = item.node.frontmatter;
        return (
          <Link key={item.node.id} to={path}>
          <Img fluid={image.childImageSharp.fluid} alt="test"/>
            <h2>{title}</h2>
            <span>{date}</span>
          </Link>
        )
      })
    }
  </Layout>
}

export default IndexPage
