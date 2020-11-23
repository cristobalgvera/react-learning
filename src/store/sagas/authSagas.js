import { put, delay, call } from 'redux-saga/effects';
import { LOCAL_STORAGE } from '../../shared/constant';
import { authActionsSagas } from '../actions';
import axios from '../../services/axiosInstance';

const { LOCAL_ID, ID_TOKEN, EXPIRATION_DATE } = LOCAL_STORAGE;
const {
    authenticationLogoutSucceed,
    authenticationLogout,
    authenticationStart,
    authenticationSucceeded,
    authenticationFailed,
} = authActionsSagas;
const apiKey = 'AIzaSyCm6jomIaSVjN9WR7muaU-hOgRminSRVPY';

const authenticationLogoutSaga = function* () {
    const toRemoveItems = [LOCAL_ID, ID_TOKEN, EXPIRATION_DATE];
    yield _doCalls(localStorage, 'removeItem', ...toRemoveItems);
    yield put(authenticationLogoutSucceed());
};

const initAuthenticationSaga = function* ( { payload: { credential, method } } ) {
    yield put(authenticationStart());
    const updatedCredential = { ...credential, returnSecureToken: true };
    let url = method
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
    url += `${apiKey}`;

    try {
        const { data: authentication } = yield axios.post(url, updatedCredential);
        _storeAuthentication(authentication);
        yield put(authenticationSucceeded(authentication));
        yield _setAuthenticationTimeout(authentication.expiresIn);
    } catch ({ response: { data: { error } } }) {
        yield put(authenticationFailed(error));
    }
};

const checkAuthStateSaga = function* () {
    const idToken = localStorage.getItem(ID_TOKEN);
    if (idToken) {
        const expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE));
        if (expirationDate > new Date()) {
            const localId = localStorage.getItem(LOCAL_ID);
            const expiresIn = expirationDate.getTime() - new Date().getTime();
            yield put(authenticationSucceeded({
                idToken: idToken,
                localId: localId,
            }));
            _setAuthenticationTimeout(expiresIn / 1000);
            return;
        }
    }
    yield put(authenticationLogout());
};

const _setAuthenticationTimeout = function* ( expirationTime ) {
    yield delay(expirationTime * 1000);
    yield put(authenticationLogout());
};

const _storeAuthentication = ( { idToken, localId, expiresIn } ) => {
    const expirationDate = new Date(
        new Date().getTime() + expiresIn * 1000,
    ).toISOString();

    localStorage.setItem(ID_TOKEN, idToken);
    localStorage.setItem(EXPIRATION_DATE, expirationDate);
    localStorage.setItem(LOCAL_ID, localId);
};

const _doCalls = function* ( object, method, ...args ) {
    for (let arg of args)
        yield call([object, method], arg);
};

export {
    authenticationLogoutSaga,
    initAuthenticationSaga,
    checkAuthStateSaga,
};