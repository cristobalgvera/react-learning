import { useCallback, useReducer } from 'react';
import httpRequestReducer, { initialHttpRequestState } from '../store/reducers/httpRequestReducer';
import { httpRequestActions } from '../store/actions';

const { httpRequestFails, httpRequestSend, httpRequestSucceed, httpRequestClear } = httpRequestActions;

const useHttp = () => {
    const [{ error, loading, data, extra, id }, dispatchHttpState] = useReducer(
        httpRequestReducer,
        initialHttpRequestState,
    );

    const sendRequest = useCallback(async ( url, method, body, extra, id ) => {
        dispatchHttpState(httpRequestSend());
        try {
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            dispatchHttpState(httpRequestSucceed(data, extra, id));
        } catch (error) {
            dispatchHttpState(httpRequestFails(error.message));
        }
    }, []);

    const clearRequest = () => dispatchHttpState(httpRequestClear());

    return {
        data: { loading, data, error, extra, id },
        calls: { sendRequest, clearRequest },
    };
};

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
};

export default useHttp;