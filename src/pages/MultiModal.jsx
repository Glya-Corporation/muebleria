import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import data from '../data/data';

const MultiModal = props => {
  const pageIdentify = props.identify;

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{data[pageIdentify]?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalMain'>{data[pageIdentify]?.content()}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MultiModal;
