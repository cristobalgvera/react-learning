import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItems = () => (
    <>
        <Link to={'/'}>Users</Link>
        <Link to={'/pizza'}>Pizza</Link>
    </>
);

export default NavigationItems;
