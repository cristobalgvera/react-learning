import './App.css';
import Person from "./Person/Person";
import React, {useState} from "react";
import FancyText from "./FancyText/FancyText";


function App() {
    const [persons, setPersons] = useState(
        [
            {id: 1, name: 'Cristóbal', age: 23},
            {id: 2, name: 'Daniel', age: 29},
            {id: 3, name: 'Francisca', age: 13}
        ]
    );

    const [showPersonsList, setShowPersonsList] = useState(false);

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

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="App">
            {/*<User/>*/}
            {/*<FancyText/>*/}
            <h1>Hello, World from React!</h1>
            <h2>This is an H2 tag</h2>
            <button style={style} onClick={togglePersonsList}>
                Toggle show persons
            </button>
            {showPersonsList && listPersons()}
        </div>
    );
}

export default App;
