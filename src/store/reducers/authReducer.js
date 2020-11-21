import { AUTH_ACTIONS } from '../actions/actionTypes';
import { updateState } from '../../shared/utility';

const { AUTH_START, AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT, LOCAL_AUTH_CHECKED } = AUTH_ACTIONS;

export const initialState = {
    checked: false,
    loading: false,
    error: null,
    idToken: null,
    localId: null,
};

const authReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case AUTH_START:
            return updateState(state, { loading: true });
        case AUTH_SUCCESS:
            return authSuccess(state, payload);
        case AUTH_FAIL:
            return authFail(state, payload);
        case AUTH_LOGOUT:
            return authLogout(state);
        case LOCAL_AUTH_CHECKED:
            return updateState(state, { checked: true });
        default:
            return state;
    }
};

const authLogout = ( state ) => updateState(state, updateState(initialState, { checked: true }));

const authSuccess = ( state, payload ) => {
    const { authentication: { idToken, localId } } = payload;
    return updateState(state, updateState(initialState, {
            idToken: idToken,
            localId: localId,
            checked: true,
        }),
    );
};

const authFail = ( state, payload ) => {
    const { error } = payload;
    return updateState(state, updateState(initialState, {
            error: error,
            checked: true,
        }),
    );
};

export default authReducer;