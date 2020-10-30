import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "../../containers/App.module.css";
import AuthContext from "../../context/AuthContext";

const StyledButton = styled.button`
  background-color: ${({ pressed }) => (pressed ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ pressed }) => (pressed ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const Cockpit = ({ show, toggle, personsLength }) => {
  const [classes, setClasses] = useState("");
  const styledButtonRef = useRef();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setClasses(() => {
      const _classes = [];
      if (personsLength <= 2) _classes.push(styles.red);
      if (personsLength <= 1) _classes.push(styles.bold);
      return _classes.join(" ");
    });
    console.log("[Cockpit.js] personsLength useEffect");
  }, [personsLength]);

  useEffect(() => {
    styledButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] Cleanup work in progress");
    };
  }, []);

  return (
    <>
      <h1>Hello, World from React!</h1>
      <p className={classes}>This is an paragraph tag</p>
      <StyledButton ref={styledButtonRef} pressed={show} onClick={toggle}>
        Toggle show persons
      </StyledButton>
      <button onClick={login}>Log in</button>
    </>
  );
};

const { number, func, bool } = PropTypes;
Cockpit.propTypes = {
  show: bool.isRequired,
  toggle: func.isRequired,
  personsLength: number.isRequired,
};

export default Cockpit;
