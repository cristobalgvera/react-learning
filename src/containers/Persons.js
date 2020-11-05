import React from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { personActions } from "../store/actions";

const { ADD, REMOVE } = personActions;

const Persons = ({ reduxStates: { persons }, reduxActions }) => {
  const { onRemovePerson, onAddPerson } = reduxActions;

  return (
    <div>
      <AddPerson personAdded={onAddPerson} />
      {persons.map(({ id, name, age }) => (
        <Person
          key={id}
          name={name}
          age={age}
          clicked={() => onRemovePerson(id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { persons } = state;
  return {
    reduxStates: {
      persons: persons,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxActions: {
      onRemovePerson: (id) =>
        dispatch({
          type: REMOVE,
          payload: { persons: { person: { id: id } } },
        }),
      onAddPerson: (person) =>
        dispatch({ type: ADD, payload: { person: person } }),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
