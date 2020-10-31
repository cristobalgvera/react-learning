import React, { useEffect, useState } from "react";
import axios from "../../services/axios-jsonplaceholder";

import Posts from "../../components/Posts/Posts";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import BlogContext from "../../context/BlogContext/BlogContext";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState();
  const [errorMessage, setErrorMessage] = useState();

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
        setErrorMessage("Something went wrong :(");
      });
  }, []);

  const postClickedHandler = (id) => {
    setActivePost({ ...posts.find((post) => post.id === id) });
  };

  const removePostHandler = (id) => {
    const postIndex = posts.findIndex((post) => post.id === id);
    setPosts(([...prevState]) => {
      prevState.splice(postIndex, 1);
      return prevState;
    });
    setActivePost(null);
  };

  return (
    <div>
      <section className="Posts">
        <BlogContext.Provider value={{ clicked: postClickedHandler }}>
          <Posts posts={posts} />
        </BlogContext.Provider>
        {errorMessage && (
          <p>
            <strong>{errorMessage}</strong>
          </p>
        )}
      </section>
      <section>
        <FullPost post={activePost} remove={removePostHandler} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
