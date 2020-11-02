import React from "react";
import { useParams, useLocation } from "react-router-dom";

const useQuery = (key) => new URLSearchParams(useLocation().search).get(key);

const useQueryAll = () => {
  let _entries = {};
  const entries = new URLSearchParams(useLocation().search).entries();
  for (let entry of entries) _entries = { ..._entries, [entry[0]]: entry[1] };
  return _entries;
};

const Course = () => {
  const { id } = useParams();
  const { title } = useQueryAll();

  return (
    <div>
      <h1>{title}</h1>
      <p>You selected the Course with ID: {id}</p>
    </div>
  );
};

export default Course;
