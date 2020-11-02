import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../services/axios-jsonplaceholder";

import "./NewPost.css";

const NewPost = () => {
  const history = useHistory();
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    author: "Manu",
  });

  const newPostHandler = async () => {
    await axios.post(`/posts`, newPost).then((response) => {
      console.log(response);
      history.push("/posts");
    });
  };

  const onChangeHandler = (property, value) => {
    setNewPost(({ ...prevState }) => ({ ...prevState, [property]: value }));
  };

  const { title, body, author } = newPost;
  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={({ target: { value, name: property } }) =>
          onChangeHandler(property, value)
        }
      />
      <label htmlFor="body">Content</label>
      <textarea
        rows="4"
        name="body"
        value={body}
        onChange={({ target: { value, name: property } }) =>
          onChangeHandler(property, value)
        }
      />
      <label htmlFor="author">Author</label>
      <select
        name="author"
        value={author}
        onChange={({ target: { value, name: property } }) =>
          onChangeHandler(property, value)
        }
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={newPostHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
