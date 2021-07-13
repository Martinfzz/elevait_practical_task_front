/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreatePage = ({ submitCreatePage, cancelCreatePage }) => (
  <div id="createDocument">
    <Button variant="danger" type="button" className="float-end me-3" onClick={cancelCreatePage}>
      X
    </Button>
    <Form onSubmit={(e) => submitCreatePage(e)} className="mt-5 w-75 mx-auto">
      <Form.Group controlId="formText">
        <Form.Label>Text</Form.Label>
        <Form.Control type="textarea" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  </div>
);

export default CreatePage;
