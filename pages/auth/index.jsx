import React from 'react';
import Router from 'next/router';
import User from '../../components/User/User';

const AuthIndexPage = ( { title, users } ) => (
    <div>
        <h1>The Auth Page</h1>
        <h2>{title}</h2>
        <button onClick={() => Router.push('/')}>Main</button>
        <User name={'Cristóbal'} age={23}/>
        <h3>Emails from JSON Placeholder</h3>
        <ul>
            {users.map(( { id, email } ) => <li key={id}><strong>Contact:</strong> {email.toLowerCase()}</li>)}
        </ul>
    </div>
);

export const getStaticProps = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    return {
        props: {
            title: 'This is a title from getStaticProps',
            users,
        },
    };
};

export default AuthIndexPage;