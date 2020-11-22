import { put } from 'redux-saga/effects';

import { LOCAL_STORAGE } from '../shared/constant';
import { AUTH_ACTIONS } from '../store/actions/actionTypes';

const { LOCAL_ID, ID_TOKEN, EXPIRATION_DATE } = LOCAL_STORAGE;
const { AUTH_LOGOUT } = AUTH_ACTIONS;

const handleAuthenticationLogoutSaga = function* ( action ) {
    yield localStorage.removeItem(ID_TOKEN);
    yield localStorage.removeItem(EXPIRATION_DATE);
    yield localStorage.removeItem(LOCAL_ID);
    yield put({ type: AUTH_LOGOUT });
};

export { handleAuthenticationLogoutSaga };