import React from "react";
import PropTypes from "prop-types";
import Person from "./Person/Person";

const Persons = ({ persons, show, changed, removed }) => {
  const listPersons = () =>
    persons.map(({ age, id, name }, index) => {
      return (
        <Person
          key={id}
          changed={changed}
          removed={() => removed(index)}
          age={age}
          name={name}
          id={id}
        />
      );
    });

  return <div>{show && listPersons()}</div>;
};

const { array, bool, func } = PropTypes;
Persons.propTypes = {
  persons: array.isRequired,
  show: bool.isRequired,
  changed: func.isRequired,
  removed: func.isRequired,
};

export default Persons;
