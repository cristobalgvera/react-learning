import React from "react";
import { Route, Switch } from "react-router-dom";

import "./Blog.scss";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const Blog = () => {
  return (
    <div className="Blog">
      <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Blog;
