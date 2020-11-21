import { AUTH_ACTIONS } from "./actionTypes";
import axios from "../../services/axios-orders";
import { LOCAL_STORAGE } from "../../shared/constant";

const { EXPIRATION_DATE, ID_TOKEN, LOCAL_ID } = LOCAL_STORAGE;

const { AUTH_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT } = AUTH_ACTIONS;
const apiKey = "AIzaSyCm6jomIaSVjN9WR7muaU-hOgRminSRVPY";

const authenticationSucceeded = (authentication) => ({
  type: AUTH_SUCCESS,
  payload: { authentication: authentication },
});

const authenticationFailed = (error) => ({
  type: AUTH_FAIL,
  payload: { error: error },
});

const authenticationStart = () => ({ type: AUTH_START });

const authenticationLogout = () => ({ type: AUTH_LOGOUT });

// const localAuthenticationChecked = () => ({ type: LOCAL_AUTH_CHECKED });

const setAuthenticationTimeout = (expirationTime) => (dispatch) => {
  setTimeout(
    () => dispatch(handleAuthenticationLogout()),
    expirationTime * 1000
  );
};

const handleAuthenticationLogout = () => {
  unstoreAuthentication();
  return authenticationLogout();
};

const storeAuthentication = ({ idToken, expiresIn, localId }) => {
  const expirationDate = new Date(
    new Date().getTime() + expiresIn * 1000
  ).toISOString();

  localStorage.setItem(ID_TOKEN, idToken);
  localStorage.setItem(EXPIRATION_DATE, expirationDate);
  localStorage.setItem(LOCAL_ID, localId);
};

const unstoreAuthentication = () => {
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(EXPIRATION_DATE);
  localStorage.removeItem(LOCAL_ID);
};

const checkAuthState = () => (dispatch) => {
  const idToken = localStorage.getItem(ID_TOKEN);
  if (idToken) {
    const expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE));
    if (expirationDate > new Date()) {
      const localId = localStorage.getItem(LOCAL_ID);
      const expiresIn = expirationDate.getTime() - new Date().getTime();
      dispatch(
        authenticationSucceeded({
          idToken: idToken,
          localId: localId,
        })
      );
      dispatch(setAuthenticationTimeout(expiresIn / 1000));
      return;
    }
  }
  dispatch(handleAuthenticationLogout());
};

const initAuthentication = (credential, method) => (dispatch) => {
  dispatch(authenticationStart());
  const updatedCredential = { ...credential, returnSecureToken: true };
  let url = method
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
  url += `${apiKey}`;

  axios
    .post(url, updatedCredential)
    .then(({ data: authentication }) => {
      storeAuthentication(authentication);
      dispatch(authenticationSucceeded(authentication));
      dispatch(setAuthenticationTimeout(authentication.expiresIn));
    })
    .catch(({ response: { data: { error } } }) =>
      dispatch(authenticationFailed(error))
    );
};

export { initAuthentication, handleAuthenticationLogout, checkAuthState };
