import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import styles from './App.module.css';

import Person from "./Person/Person";

const StyledButton = styled.button`
    background-color: ${({pressed}) => pressed ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({pressed}) => pressed ? 'salmon' : 'lightgreen'};
        color: black;
    }
    `;

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

    useEffect(() => {
        setClasses(() => {
            const _classes = [];
            if (persons.length <= 2) _classes.push(styles.red);
            if (persons.length <= 1) _classes.push(styles.bold);
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
        <div className={styles.App}>
            {/*<User/>*/}
            {/*<FancyText/>*/}
            <h1>Hello, World from React!</h1>
            <p className={classes}>This is an paragraph tag</p>
            <StyledButton pressed={showPersonsList} onClick={togglePersonsList}>
                Toggle show persons
            </StyledButton>
            {showPersonsList && listPersons()}
        </div>
    );
}

export default App;
