import React, {useEffect, useState} from "react";
import './App.css';
import Person from "./Person/Person";
import Radium, {StyleRoot} from "radium";

function App() {
    const [persons, setPersons] = useState(
        [
            {id: 1, name: 'Cristóbal', age: 23},
            {id: 2, name: 'Daniel', age: 29},
            {id: 3, name: 'Francisca', age: 13}
        ]
    );

    const [showPersonsList, setShowPersonsList] = useState(false);

    const [classes, setClasses] = useState('');

    const [style, setStyle] = useState(
        {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
    )

    useEffect(() => {
        setStyle(prevState => (
            {
                ...prevState,
                backgroundColor: showPersonsList ? 'red' : 'green',
                ':hover': {
                    backgroundColor: showPersonsList ? 'orange' : 'lightgreen',
                    color: 'black'
                }
            }
        ));
    }, [showPersonsList]);

    useEffect(() => {
        setClasses(() => {
            const _classes = [];
            if (persons.length <= 2) _classes.push('red');
            if (persons.length <= 1) _classes.push('bold');
            return _classes.join(' ');
        });
    }, [persons.length]);

    const nameChangedHandler = ({target}, id) => {
        const personIndex = persons.findIndex(person => person.id === id);
        const person = {...persons[personIndex]};
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
        setShowPersonsList(prevState => !prevState);
    };

    const listPersons = () => persons.map(({age, id, name}, index) => {
        return (
            <Person
                key={id}
                changed={nameChangedHandler}
                remove={() => deletePersonHandler(index)}
                age={age}
                name={name}
                id={id}
            />
        );
    });

    return (
        <div className="App">
            {/*<User/>*/}
            {/*<FancyText/>*/}
            <h1>Hello, World from React!</h1>
            <p className={classes}>This is an paragraph tag</p>
            <button style={style} onClick={togglePersonsList}>
                Toggle show persons
            </button>
            {
                showPersonsList &&
                <StyleRoot>
                    {listPersons()}
                </StyleRoot>
            }

        </div>
    );
}

export default Radium(App);
