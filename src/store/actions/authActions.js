import { AUTH_ACTIONS } from './actionTypes';
import axios from '../../services/axios-orders';

const { AUTH_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT } = AUTH_ACTIONS;
const apiKey = 'AIzaSyCm6jomIaSVjN9WR7muaU-hOgRminSRVPY';

const authenticationSucceeded = ( authentication ) => ({
    type: AUTH_SUCCESS,
    payload: { authentication: authentication },
});

const authenticationFailed = ( error ) => ({ type: AUTH_FAIL, payload: { error: error } });

const authenticationStart = () => ({ type: AUTH_START });

const authenticationLogout = () => ({ type: AUTH_LOGOUT });

const checkAuthTimeout = ( expirationTime ) => ( dispatch ) => {
    setTimeout(() => dispatch(authenticationLogout()), expirationTime * 1000);
};

const initAuthentication = ( credential, method ) => ( dispatch ) => {
    dispatch(authenticationStart());
    const updatedCredential = { ...credential, returnSecureToken: true };
    let url = method ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
    url += `${apiKey}`;

    axios.post(url, updatedCredential)
        .then(( { data: authentication } ) => {
            dispatch(authenticationSucceeded(authentication));
            dispatch(checkAuthTimeout(authentication.expiresIn));
        })
        .catch(( { response: { data: { error } } } ) => dispatch(authenticationFailed(error)));
};

export { initAuthentication, authenticationLogout };