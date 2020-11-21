import { authReducer } from '../index';
import { AUTH_ACTIONS } from '../../actions/actionTypes';
import { updateState } from '../../../shared/utility';
import { initialState } from '../authReducer';

const { AUTH_SUCCESS } = AUTH_ACTIONS;

describe('authReducer', function () {
    it('should return the initial state', function () {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should store the token upon login', function () {
        expect(authReducer(undefined, {
            type: AUTH_SUCCESS,
            payload: {
                authentication: {
                    idToken: 'idToken',
                    localId: 'localId',
                },
            },
        })).toEqual(updateState(initialState, {
            idToken: 'idToken',
            localId: 'localId',
        }));
    });
});