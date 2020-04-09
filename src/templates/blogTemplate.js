import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(markdownRemark);

  return (
    <Layout>
      <SEO title={frontmatter.title}/>

      <div className="blog-post-container">
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
            fluid(maxWidth : 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`