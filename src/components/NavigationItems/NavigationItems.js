import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, PIZZA } from '../Routes/paths';

const NavigationItems = () => (
    <>
        <Link to={HOME}>Users</Link>
        <Link to={PIZZA}>Pizza</Link>
    </>
);

export default NavigationItems;
