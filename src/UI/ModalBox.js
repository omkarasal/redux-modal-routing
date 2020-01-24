import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalBox = (props) => {
    return (
        <Modal 
            show={props.show}
            onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.message}</p>
                </Modal.Body>
        </Modal>
    )
}

export default ModalBox;