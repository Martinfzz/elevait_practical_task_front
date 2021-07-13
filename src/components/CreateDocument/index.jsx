/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton';

const CreateDocument = ({ submitCreateDocument, show, onHide }) => (
  <div id="createDocument">
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton />
      <Form onSubmit={(e) => submitCreateDocument(e)} className="mt-3 w-75 mx-auto">
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <CustomButton color="primary" text="Create" buttonClass="float-right my-3" />
      </Form>
    </Modal>
  </div>
);

export default CreateDocument;
