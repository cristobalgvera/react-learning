import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar as NavbarStyle, active } from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={NavbarStyle}>
    <ul>
      <li>
        <NavLink
          to="/users"
          activeClassName="custom-active-style"
          activeStyle={{
            color: "red",
            textDecoration: "underline",
          }}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" activeClassName={`${active}`}>
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/you-are-lost/${Math.floor(Math.random() * 100)}`}
          activeClassName={`${active}`}
        >
          I wanna be lost
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
