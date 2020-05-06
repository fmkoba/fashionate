import React from 'react';
import { Link } from 'gatsby';
import './MiniPost.scss';

const MiniPost = ({ post }) => (
  <Link className="post" to={post.frontmatter.path}>
    <div
      className="post__img"
      style={{ backgroundImage: `url(${post.frontmatter.image.publicURL})` }}
      />
    <div className="post__content">
      <div className="post__title">{post.frontmatter.title}</div>
      <div className="post__date">{post.frontmatter.date}</div>
      <div className="post__excerpt">{post.excerpt}</div>
    </div>
  </Link>
);

export default MiniPost;