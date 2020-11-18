import { AUTH_ACTIONS } from '../actions/actionTypes';
import { updateState } from '../utility';

const { AUTH_START, AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT } = AUTH_ACTIONS;

const initialState = {
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
            return updateState(state, { ...initialState });
        default:
            return state;
    }
};

const authSuccess = ( state, payload ) => {
    const { authentication: { idToken, localId } } = payload;
    return updateState(state,
        {
            ...initialState,
            idToken: idToken,
            localId: localId,
        },
    );
};

const authFail = ( state, payload ) => {
    const { error } = payload;
    return updateState(state,
        {
            ...initialState,
            error: error,
        },
    );
};

export default authReducer;