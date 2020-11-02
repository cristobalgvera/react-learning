import React, { useEffect, useState } from "react";

const asyncComponent = (importComponent) => (props) => {
  const [Component, setComponent] = useState();

  useEffect(() => {
    importComponent().then((Component) => {
      // It can't use this for lazy load stateful components (?)
      console.log(Component);
      setComponent(Component.default);
    });
  }, []);

  return (Component && <Component {...props} />) || null;
};

export default asyncComponent;
