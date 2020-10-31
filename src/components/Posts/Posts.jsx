import React from "react";
import PropTypes from "prop-types";

import Post from "./Post/Post";

const Posts = ({ posts }) =>
  posts.map((post) => <Post key={post.id} post={post} />);

const { arrayOf, string, number, shape } = PropTypes;
Posts.propTypes = {
  posts: arrayOf(
    shape({
      title: string.isRequired,
      author: string,
      id: number.isRequired,
    })
  ),
};

export default Posts;
