/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import FormGroup from '../FormGroup';

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
        <FormGroup form="formTitle" formLabel="Title" formType="text" />
        <FormGroup form="formAuthor" formLabel="Author" formType="text" />
        <FormGroup form="formDate" formLabel="Date" formType="date" />

        <CustomButton color="primary" text="Create" buttonClass="float-right my-3" />
      </Form>
    </Modal>
  </div>
);

export default CreateDocument;
