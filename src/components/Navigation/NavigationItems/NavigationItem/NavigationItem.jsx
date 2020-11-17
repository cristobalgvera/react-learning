import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
    NavigationItem as NavigationItemStyle,
    active,
} from './NavigationItem.module.scss';

const NavigationItem = ( { link, clicked, children } ) => {
    const navLinkHelper = () => (
        clicked ? (
            <a style={{ cursor: 'pointer' }}>
                {children}
            </a>
        ) : (
            <NavLink to={`${link}`} activeClassName={active}>
                {children}
            </NavLink>
        )
    );

    return (
        <li className={NavigationItemStyle} onClick={clicked}>
            {navLinkHelper()}
        </li>
    );
};

const { string, func } = PropTypes;
NavigationItem.propTypes = {
    link: string.isRequired,
    clicked: func,
};

export default NavigationItem;
