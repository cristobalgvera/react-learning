import React from "react";
import PropTypes from "prop-types";

import "./Post.css";

const Post = ({ post: { title, author }, clicked }) => (
  <article className="Post">
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{author || "Anonymous"}</div>
    </div>
  </article>
);

const { shape, string } = PropTypes;
Post.propTypes = {
  post: shape({
    title: string.isRequired,
    author: string,
  }).isRequired,
};

export default Post;
