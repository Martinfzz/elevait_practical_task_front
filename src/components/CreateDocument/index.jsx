/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateDocument = ({ submitCreateDocument, cancelCreateDocument }) => (
  <div id="createDocument">
    <Button variant="danger" type="button" className="float-end me-3 rounded-circle" onClick={cancelCreateDocument}>
      X
    </Button>
    <Form onSubmit={(e) => submitCreateDocument(e)} className="mt-5 w-75 mx-auto">
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

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  </div>
);

export default CreateDocument;
