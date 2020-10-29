import React from "react";

const AddClass = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

export default AddClass;
