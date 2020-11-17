import React from 'react';

import { NavigationItems as NavigationItemsStyle } from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { authenticationLogout } from '../../../store/actions';

const NavigationItems = (
    {
        reduxState: { localId },
        reduxActions: { onLogout },
    },
) => {
    const logoutHandler = () => {
        if (window.confirm('Are you sure you want to leave?'))
            onLogout();
    };

    const loginMessage = () => (
        localId ? (
            'Logout'
        ) : (
            'Sign in'
        )
    );

    return (
        <ul className={NavigationItemsStyle}>
            <NavigationItem link="/burger-builder">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link="/auth" clicked={localId && logoutHandler}>{loginMessage()}</NavigationItem>
        </ul>
    );
};

const mapStateToProps = ( { authReducer: { localId } } ) => ({
    reduxState: { localId: localId },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onLogout: () => dispatch(authenticationLogout()),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
