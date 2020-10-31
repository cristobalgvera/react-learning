import { createContext } from "react";

const BlogContext = createContext({
  clicked: () => {},
});

export default BlogContext;
