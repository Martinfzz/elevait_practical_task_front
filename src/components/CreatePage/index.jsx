/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

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

        <Button variant="primary" type="submit" className="float-right my-3">
          Add Page
        </Button>
      </Form>
    </Modal>
  </div>
);

export default CreatePage;
