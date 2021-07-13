/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateDocument = ({ submitCreateDocument }) => (
  <Form onSubmit={(e) => submitCreateDocument(e)}>
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
);

export default CreateDocument;
