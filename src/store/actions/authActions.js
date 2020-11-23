import { AUTH_ACTIONS } from './actionTypes';

const {
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_INITIATE_LOGOUT,
    AUTH_LOGOUT,
    AUTH_USER,
    AUTH_CHECK_INITIAL_STATE,
} = AUTH_ACTIONS;

const authenticationSucceeded = ( authentication ) => ({
    type: AUTH_SUCCESS,
    payload: { authentication },
});

const authenticationFailed = ( error ) => ({
    type: AUTH_FAIL,
    payload: { error },
});

const authenticationStart = () => ({ type: AUTH_START });

const authenticationLogout = () => ({ type: AUTH_INITIATE_LOGOUT });

const authenticationLogoutSucceed = () => ({ type: AUTH_LOGOUT });

const checkAuthState = () => ({ type: AUTH_CHECK_INITIAL_STATE });

const initAuthentication = ( credential, method ) => ({
    type: AUTH_USER,
    payload: { credential, method },
});

export { initAuthentication, authenticationLogout, checkAuthState };
export const authActionsSagas = {
    authenticationLogoutSucceed,
    authenticationLogout,
    authenticationStart,
    authenticationSucceeded,
    authenticationFailed,
};
