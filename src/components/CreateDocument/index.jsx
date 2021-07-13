import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { DocumentsManager } from '../../services';

const CreateDocument = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.formTitle.value;
    const author = e.target.formAuthor.value;
    const date = e.target.formDate.value;

    DocumentsManager.createDocument(title, author, date).then((data) => {
      console.log(data);
    });
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
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
};

export default CreateDocument;
