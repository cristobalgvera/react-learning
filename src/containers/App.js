import React, { useState } from "react";

import styles from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AddClass from "../hoc/AddClass";
import AuthContext from "../context/AuthContext";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Cristóbal", age: 23 },
    { id: 2, name: "Daniel", age: 29 },
    { id: 3, name: "Francisca", age: 13 },
  ]);

  const [showPersonsList, setShowPersonsList] = useState(false);
  const [showCockpit, setShowCockpit] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const nameChangedHandler = ({ target }, id) => {
    const personIndex = persons.findIndex((person) => person.id === id);
    const person = { ...persons[personIndex] };
    person.name = target.value;
    setPersons(([...prevState]) => {
      prevState[personIndex] = person;
      return prevState;
    });
  };

  const deletePersonHandler = (index) => {
    setPersons(([...prevState]) => {
      prevState.splice(index, 1);
      return prevState;
    });
  };

  const togglePersonsList = () => {
    setShowPersonsList((prevState) => !prevState);
  };

  const loginHandler = () => setAuthenticated(true);

  return (
    // <div className={styles.App}>
    <>
      <button onClick={() => setShowCockpit((prevState) => !prevState)}>
        Toggle cockpit
      </button>
      <AuthContext.Provider
        value={{
          authenticated: authenticated,
          login: loginHandler,
        }}
      >
        {showCockpit && (
          <Cockpit
            show={showPersonsList}
            toggle={togglePersonsList}
            personsLength={persons.length}
            login={loginHandler}
          />
        )}
        <Persons
          persons={persons}
          show={showPersonsList}
          removed={deletePersonHandler}
          changed={nameChangedHandler}
          isAuthenticated={authenticated}
        />
      </AuthContext.Provider>
    </>
    // </div>
  );
}

export default AddClass(App, styles.App);
