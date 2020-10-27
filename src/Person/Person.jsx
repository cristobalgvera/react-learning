import React from 'react';
import './Person.css';

// A stateless component is called a dump or presentational component.
// It doesn't have logic.

const Person = ({id, age, name, changed, remove, children}) => {
    return (
        <div className={"Person"}>
            <p>
                I'm {name} and I'm {age} years
            </p>
            {children &&
            <p>{children}</p>}
            <input
                type={"text"}
                onChange={(event) => changed(event, id)}
                value={name}
            />
            <button onClick={() => remove()}>Remove</button>
        </div>
    );
}

export default Person;