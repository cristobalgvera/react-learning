import React, { useState } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Course from "../Course/Course";

import "./Courses.scss";

const initialCourses = [
  { id: 1, title: "Angular - The Complete Guide" },
  { id: 2, title: "Vue - The Complete Guide" },
  { id: 3, title: "PWA - The Complete Guide" },
];

const Courses = () => {
  const { url } = useRouteMatch();
  const [courses] = useState(initialCourses);

  return (
    <div>
      <h1>Amazing Udemy Courses</h1>
      <section className="Courses">
        {courses.map((course) => {
          const { title, id } = course;
          return (
            <Link
              key={id}
              to={{ pathname: `${url}/${id}`, search: `title=${title}` }}
            >
              <article className="Course">{title}</article>
            </Link>
          );
        })}
      </section>
      <Route path={`${url}/:id`} component={Course} exact />
    </div>
  );
};

export default Courses;
