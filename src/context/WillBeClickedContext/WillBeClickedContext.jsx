import { createContext } from "react";

const WillBeClickedContext = createContext({
  clicked: () => {},
});

export default WillBeClickedContext;
