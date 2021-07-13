/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton';

const CreatePage = ({ submitCreatePage, show, onHide }) => (
  <div id="createDocument">
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton />
      <Form onSubmit={(e) => submitCreatePage(e)} className="mt-3 w-75 mx-auto">
        <Form.Group controlId="formText">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <CustomButton color="primary" text="Add Page" buttonClass="float-right my-3" />
      </Form>
    </Modal>
  </div>
);

export default CreatePage;
