import React from "react";
import { Modal, Button } from "react-bootstrap";

function DialogModal(props) {
  const { smShow, handleSubmit, handleCloseModal, type } = props;
  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => handleCloseModal()}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Confirm user?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button onClick={() => handleCloseModal()}>NO </Button>{" "}
        <Button value={type} onClick={(e) => handleSubmit(e)}>
          YES
        </Button>{" "}
      </Modal.Body>
    </Modal>
  );
}

export default DialogModal;
