import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const MyVerticallyCenteredModal = (props) => {
  let navigate = useNavigate();

  

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Theaters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>
            <ul>Theater1</ul>
            <Button onClick={() => navigate("/book-ticket")}>
              Book Tickets
            </Button>
            <ul>Theater2</ul>
          </li>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
