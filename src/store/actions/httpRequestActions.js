import { HTTP_REQUEST_ACTIONS } from './actionTypes';

const {
    HTTP_REQUEST_FAILS,
    HTTP_REQUEST_SEND,
    HTTP_REQUEST_SUCCEED,
    HTTP_REQUEST_CLEAR,
} = HTTP_REQUEST_ACTIONS;

const httpRequestSend = () => ({ type: HTTP_REQUEST_SEND });

const httpRequestFails = ( error ) => ({
    type: HTTP_REQUEST_FAILS,
    payload: { error },
});

const httpRequestSucceed = ( data, extra, id ) => ({
    type: HTTP_REQUEST_SUCCEED,
    payload: { data, extra, id },
});

const httpRequestClear = () => ({ type: HTTP_REQUEST_CLEAR });

export { httpRequestFails, httpRequestSend, httpRequestSucceed, httpRequestClear };