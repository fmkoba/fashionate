import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './Post.scss';
import './Main.scss';

const MainSection = (props) => {
  const { posts } = props;
  return (
    <div className="first-section container">
      {posts.map((item) => {
        const { title, date, path, image } = item.node.frontmatter;
        return (
          <div className="post">
            <Link key={item.node.id} to={path}>
              <Img fluid={image.childImageSharp.fluid} alt="test"/>
              <span className="post-title">{title}</span>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default MainSection;