import { personActions } from "../actions";

const { ADD, REMOVE } = personActions;

const initialState = {
  persons: [],
};

const personsReducer = (state = initialState, action) => {
  const { persons } = state;
  const { payload, type } = action;
  switch (type) {
    case ADD:
      return { ...state, persons: personAddedHandler(persons, payload.person) };
    case REMOVE:
      return {
        ...state,
        persons: persons.filter(
          (person) => person.id !== payload.persons.person.id
        ),
      };
    default:
      return state;
  }
};

const personAddedHandler = (persons, person) => {
  const { name, age } = person;
  const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: name,
    age: age,
  };
  return persons.concat(newPerson);
};

export default personsReducer;
