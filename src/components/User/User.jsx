import React, {useState} from 'react';
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";
import './User.css';

const User = () => {
    const [username, setUsername] = useState('Cristóbal');

    const usernameChangedHandler = ({target}) => {
        setUsername(target.value);
    };

    const style = {
        border: '1px solid black',
        borderRadius: '5%',
        boxShadow: '10px 5px 5px black',
        width: '200px',
        margin: '100px auto',
        padding: '3%'
    }

    return (
        <div style={style}>
            <UserInput changed={usernameChangedHandler} username={username}/>
            <UserOutput username={username}/>
        </div>
    );
};

export default User;
