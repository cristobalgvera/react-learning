import React from "react";
import PropTypes from "prop-types";

import "./FullPost.css";

const FullPost = ({ post, remove }) => {
  let postInfo = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

  if (post) {
    const { title, author, body, id } = post;
    postInfo = (
      <div className="FullPost">
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{author}</p>
        <div className="Edit">
          <button className="Delete" onClick={() => remove(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return postInfo;
};

const { shape, number, string, func } = PropTypes;
FullPost.propTypes = {
  post: shape({
    title: string.isRequired,
    author: string,
    body: string,
    id: number.isRequired,
  }),
  remove: func.isRequired,
};

export default FullPost;
