import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationItems as NavigationItemsStyle } from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { handleAuthenticationLogout } from '../../../store/actions';

export const NavigationItems = (
    {
        reduxState: { localId },
        reduxActions: { onLogout },
    },
) => {
    const history = useHistory();

    const logoutHandler = () => {
        if (window.confirm('Are you sure you want to leave?')) {
            onLogout();
            history.push('/burger-builder');
        }
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
            {localId && <NavigationItem link="/orders">Orders</NavigationItem>}
            <NavigationItem link="/sign-in" clicked={localId && logoutHandler}>{loginMessage()}</NavigationItem>
        </ul>
    );
};

const mapStateToProps = ( { authReducer: { localId } } ) => ({
    reduxState: { localId: localId },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onLogout: () => dispatch(handleAuthenticationLogout()),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
