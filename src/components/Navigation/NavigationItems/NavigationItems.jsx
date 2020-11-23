import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationItems as NavigationItemsStyle } from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { authenticationLogout } from '../../../store/actions';
import {
    BURGER_BUILDER,
    ORDERS,
    SIGN_IN,
} from '../../Routes/path/path';

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
            history.push(BURGER_BUILDER);
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
            <NavigationItem link={BURGER_BUILDER}>Burger Builder</NavigationItem>
            {localId && <NavigationItem link={ORDERS}>My Orders</NavigationItem>}
            <NavigationItem link={SIGN_IN} clicked={localId && logoutHandler}>{loginMessage()}</NavigationItem>
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
