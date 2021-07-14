/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ content, show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton />
    {content}
  </Modal>
);

export default CustomModal;
