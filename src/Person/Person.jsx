import React, {useState} from 'react';
import './Person.css';
import Radium from "radium";

// A stateless component is called a dump or presentational component.
// It doesn't have logic.

const Person = ({id, age, name, changed, remove, children}) => {
    const [style] = useState(
        {
            '@media (max-width: 768px)': {
                width: '40%',
                backgroundColor: 'lightblue'
            }
        }
    )

    return (
        <div className={"Person"} style={style}>
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

export default Radium(Person);