import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

import Blog from "./containers/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
