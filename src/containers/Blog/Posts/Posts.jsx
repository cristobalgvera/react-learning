import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "../../../services/axios-jsonplaceholder";

import "./Posts.scss";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

const Posts = ({ match: { url } }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`/posts`);
        return response.data;
      } catch ({ message }) {
        console.log("[Blog.js | getPosts]", message);
      }
    };

    getPosts()
      .then((_posts) => {
        _posts = _posts.slice(0, 4);
        _posts.forEach((post) => (post.author = "Cristóbal"));
        setPosts(_posts);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const removePostHandler = (id) => {
    const postIndex = posts.findIndex((post) => post.id === id);
    setPosts(([...prevState]) => {
      prevState.splice(postIndex, 1);
      return prevState;
    });
  };

  const postsList = () => (
    <section className="Posts">
      {posts.map((post) => {
        const { id } = post;
        return (
          <Link to={`${url}/${id}`} key={id}>
            <Post post={post} />
          </Link>
        );
      })}
    </section>
  );

  return (
    <>
      {postsList()}
      <Route path={`${url}/:id`} component={FullPost} exact />
    </>
  );
};

export default Posts;
