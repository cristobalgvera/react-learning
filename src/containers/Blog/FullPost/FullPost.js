import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../services/axios-jsonplaceholder";

import "./FullPost.css";

const FullPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        return response.data;
      } catch ({ message }) {
        console.log(message);
      }
    };

    getPost()
      .then((post) => setPost(post))
      .catch(({ message }) => console.log(message));
  }, [id]);

  const getInfo = () => {
    if (post && id) {
      const { title, body, author } = post;
      return (
        <div className="FullPost">
          <h1>{title}</h1>
          <p>{body}</p>
          <p>{author}</p>
          <div className="Edit">
            <button className="Delete" onClick={() => alert("Nope :3")}>
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <p style={{ textAlign: "center" }}>
          <strong>Loading...</strong>
        </p>
      );
    }
  };

  return getInfo();
};

export default FullPost;
