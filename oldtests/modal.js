import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCheackout = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check Out
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
          {props.bc.map((item, index) => {
            return  (
                <>
                    <h1 key={index}>name:{item.name} Age:{item.age}</h1>
                    <img src={item.url} alt="cat" width="100px" height="100px"></img>
                </>
            )
            })
          }
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalCheackout
  