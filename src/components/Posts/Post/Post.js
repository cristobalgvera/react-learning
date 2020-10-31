import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./Post.css";
import BlogContext from "../../../context/BlogContext/BlogContext";

const Post = ({ post: { title, author, id } }) => {
  const { clicked } = useContext(BlogContext);

  return (
    <article className="Post" onClick={() => clicked(id)}>
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author || "Anonymous"}</div>
      </div>
    </article>
  );
};

const { shape, number, string } = PropTypes;
Post.propTypes = {
  post: shape({
    title: string.isRequired,
    author: string,
    id: number.isRequired,
  }).isRequired,
};

export default Post;
