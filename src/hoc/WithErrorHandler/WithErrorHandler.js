import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestItersertor);
      axios.interceptors.request.eject(this.responsetItersertor);
    }
    componentDidMount() {
      this.requestItersertor = axios.interceptors.request.use((request) => {
        this.setState({ error: null }); // ! this will hide automatically the error window
        return request;
      });
      this.responsetItersertor = axios.interceptors.response.use(
        null,
        (error) => {
          this.setState({ error: error });
          return error;
        }
      );
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal
            modalClosed={this.errorConfirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;
