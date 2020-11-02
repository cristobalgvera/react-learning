import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar as NavbarStyle, active } from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={NavbarStyle}>
    <ul>
      <li>
        <NavLink
          to="/posts"
          activeClassName="custom-active-style"
          activeStyle={{
            color: "red",
            textDecoration: "underline",
          }}
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/new-post",
            hash: "#the-hash",
            search: "?the-search=true",
          }}
          activeClassName={`${active}`}
        >
          New Post
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
