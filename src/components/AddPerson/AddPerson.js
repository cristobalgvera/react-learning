import React, { useState } from "react";

import "./AddPerson.css";

const initialPersonData = {
  name: "",
  age: 0,
};

const AddPerson = ({ personAdded }) => {
  const [person, setPerson] = useState(initialPersonData);

  const onChangeHandler = ({ target: { name: property, value } }) =>
    setPerson((prevState) => ({ ...prevState, [property]: value }));

  const { name, age } = person;
  return (
    <div className="AddPerson">
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={onChangeHandler}
      />
      <input
        type="number"
        value={age}
        name="age"
        placeholder="Age"
        min="0"
        onChange={onChangeHandler}
      />
      <button onClick={() => personAdded(person)}>Add Person</button>
    </div>
  );
};

export default AddPerson;
