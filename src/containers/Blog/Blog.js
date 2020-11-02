import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./Blog.scss";
import Posts from "./Posts/Posts";
// import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
// const NewPost = asyncComponent(() => import("./NewPost/NewPost"));

// import NewPost from "./NewPost/NewPost";
const NewPost = lazy(() => import("./NewPost/NewPost"));

const Blog = () => {
  const asyncNewPost = () => (
    <Suspense
      fallback={
        <p>
          <strong>Loading</strong>
        </p>
      }
    >
      <NewPost />
    </Suspense>
  );

  return (
    <div className="Blog">
      <Switch>
        <Route path="/new-post" render={asyncNewPost} />
        <Route path="/posts" component={Posts} />
        <Redirect from="/" to="/posts" />
      </Switch>
    </div>
  );
};

export default Blog;
