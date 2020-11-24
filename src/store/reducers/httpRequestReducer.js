import { HTTP_REQUEST_ACTIONS } from '../actions/actionTypes';
import { updateState } from '../../common/updateState';

const {
    HTTP_REQUEST_SUCCEED,
    HTTP_REQUEST_SEND,
    HTTP_REQUEST_FAILS,
    HTTP_REQUEST_CLEAR,
} = HTTP_REQUEST_ACTIONS;

const initialHttpRequestState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    id: null,
};

const httpRequestReducer = ( state, { type, payload } ) => {
    switch (type) {
        case HTTP_REQUEST_SEND:
            return httpRequestSend(state);
        case HTTP_REQUEST_SUCCEED:
            return httpRequestSucceed(state, payload);
        case HTTP_REQUEST_FAILS:
            return httpRequestFails(state, payload);
        case HTTP_REQUEST_CLEAR:
            return httpRequestClear();
        default:
            throw new Error('Something went wrong :/');
    }
};

const httpRequestClear = () => {
    return updateState(initialHttpRequestState);
};

const httpRequestSucceed = ( state, payload ) => {
    const { data, extra, id } = payload;
    return updateState(state,
        updateState(initialHttpRequestState, { data, extra, id }),
    );
};

const httpRequestFails = ( state, payload ) => {
    const { error } = payload;
    return updateState(state, { error });
};

const httpRequestSend = ( state ) => {
    return updateState(state, { loading: true });
};

export { initialHttpRequestState };
export default httpRequestReducer;