import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
import WillBeClickedContext from "../../context/WillBeClickedContext/WillBeClickedContext";

const withErrorHandler = (WrappedComponent, { interceptors }) => (props) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const requestInterceptor = interceptors.request.use(
      (request) => {
        setTimeout(() => setMessage("Action completed"), 1000);
        return request;
      },
      ({ message }) => setMessage(message)
    );

    const responseInterceptor = interceptors.response.use(
      (response) => response,
      ({ message }) => setMessage(message)
    );

    return () => {
      console.log(
        "[withErrorHandler.js || useEffect] Cleanup function",
        requestInterceptor,
        responseInterceptor
      );
      interceptors.request.eject(requestInterceptor);
      interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const messageConfirmedHandler = () => setMessage(false);

  return (
    <>
      <WillBeClickedContext.Provider
        value={{ clicked: messageConfirmedHandler }}
      >
        <Modal show={message ? true : false}>{message}</Modal>
      </WillBeClickedContext.Provider>
      <WrappedComponent {...props} />
    </>
  );
};

export default withErrorHandler;
