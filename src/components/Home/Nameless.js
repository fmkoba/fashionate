import React from 'react';
import MiniPost from './MiniPost';
import { useStaticQuery, graphql } from 'gatsby';

const Nameless = (props) => {
  const postsData = useStaticQuery(graphql `
    query NamelessPostsQuery {
      posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD/MM/YYYY")
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
            excerpt(pruneLength: 250)
            id
          }
        }
      }
    }
  `);

  const { edges: posts } = postsData.posts;

  return (
    <div className="posts">
      {posts.map(({ node:post }) => (
        <MiniPost key={ post.id } post={ post }/>
      ))}
    </div>
  );
};

export default Nameless;