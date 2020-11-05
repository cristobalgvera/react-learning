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
      return { ...state, persons: personAddedHandler(persons) };
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

const personAddedHandler = (persons) => {
  const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: "Cristóbal",
    age: Math.floor(Math.random() * 40),
  };
  return persons.concat(newPerson);
};

export default personsReducer;
