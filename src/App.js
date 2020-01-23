import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './store/actions'; 
import { Modal, Button } from 'react-bootstrap';

function App(props) {
  return (
    <React.Fragment>
      <Button variant="primary" onClick={props.onShowModal}>Modal</Button>
      <Modal 
        show={props.isShowing}
        onHide={props.onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.message}</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isShowing: state.isShowing,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowModal: (msg) => dispatch(actions.showModal(msg)),
    onHideModal: () => dispatch(actions.hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
