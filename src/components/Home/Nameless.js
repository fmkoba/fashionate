import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import './Post.scss';
import './Main.scss';

const Nameless = (props) => {
  const postsData = useStaticQuery(graphql `
    query NamelessPostsQuery {
      main: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
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
                  fixed(width : 700, height: 400 ) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth : 700, maxHeight: 400) {
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
      side: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 2, skip: 1) {
        edges {
          node {
            frontmatter {
              date
              path
              title
              tags
              image {
                absolutePath
                publicURL
                childImageSharp {
                  fixed(width : 350, height: 200 ) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth : 350, maxHeight: 200) {
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
    <div className="nameless container">
      <div className="nameless__main-post">
        <Link key={postsData.main.edges[0].node.id} to={postsData.main.edges[0].node.frontmatter.path}>
          <Img
            fluid={postsData.main.edges[0].node.frontmatter.image.childImageSharp.fluid}
            alt={postsData.main.edges[0].node.frontmatter.title}/>
          <span className="post-title">{postsData.main.edges[0].node.frontmatter.title}</span>
        </Link>
      </div>
      <div className="nameless__side-posts">
        <div className="nameless__post">
          <Link key={postsData.side.edges[0].node.id} to={postsData.side.edges[0].node.frontmatter.path} className="post__link">
            <div
              className="nameless__post-image"
              style={{ backgroundImage: `url(${postsData.side.edges[0].node.frontmatter.image.publicURL})` }} />
            <span className="post-title">{postsData.side.edges[0].node.frontmatter.title}</span>
          </Link>
        </div>
        <div className="nameless__post">
          <Link key={postsData.side.edges[1].node.id} to={postsData.side.edges[1].node.frontmatter.path} className="post__link">
            <span className="post-title">{postsData.side.edges[1].node.frontmatter.title}</span>
            <div
              className="nameless__post-image"
              style={{ backgroundImage: `url(${postsData.side.edges[1].node.frontmatter.image.publicURL})` }} />
          </Link>
        </div>
        {/* <div className="nameless__post">
          <Link key={postsData.side.edges[1].node.id} to={postsData.side.edges[1].node.frontmatter.path} className="post__link">
            <span className="post__link-img-wrapper" className="post-title">{postsData.side.edges[1].node.frontmatter.title}</span>
            <Img fixed={postsData.side.edges[1].node.frontmatter.image.childImageSharp.fixed} alt={postsData.side.edges[1].node.frontmatter.title}/>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Nameless;