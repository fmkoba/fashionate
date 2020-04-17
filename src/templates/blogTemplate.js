import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"
import Img from 'gatsby-image';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
console.log(frontmatter);

  return (
    <Layout>
      <SEO title={frontmatter.title}/>

      <div className="blog-post-container container">
        <Img fixed={frontmatter.image.childImageSharp.fixed} alt="test"/>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        image {
          absolutePath
          childImageSharp {
            fixed(width : 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`