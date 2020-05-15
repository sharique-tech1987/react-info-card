import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./MyModal.css"

const MyModal = (props) => {
    const {
        className
    } = props;

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader className="sk-modal-header" toggle={props.toggle}>Contact</ModalHeader>
                <ModalBody>
                    <p><label>Name: </label> Sharique Khan</p>
                    <p><label>Email: </label> sharique.tech1987@gmail.com </p>
                    <p><label>Skype: </label> sharique.ali.khan </p>
                    <p><a href="https://github.com/sharique-tech1987">Github</a>    </p>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default MyModal;