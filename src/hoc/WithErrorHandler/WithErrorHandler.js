import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const WithErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestItersertor);
        axios.interceptors.request.eject(responsetItersertor);
      };
    }, [requestItersertor, responsetItersertor]);

    const requestItersertor = axios.interceptors.request.use((request) => {
      setError(null);
      return request;
    });
    const responsetItersertor = axios.interceptors.response.use(
      null,
      (error) => {
        setError(error);
      }
    );
    const errorConfirmedHandler = () => {
      setError(null);
    };
    return (
      <Aux>
        <Modal modalClosed={errorConfirmedHandler} show={error}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default WithErrorHandler;
