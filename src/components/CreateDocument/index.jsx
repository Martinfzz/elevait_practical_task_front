/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import CustomModal from '../CustomModal';
import FormGroup from '../FormGroup';

const CreateDocument = ({ submitCreateDocument, show, onHide }) => (
  <div id="createDocument">
    <CustomModal
      show={show}
      onHide={onHide}
      content={(
        <Form onSubmit={(e) => submitCreateDocument(e)} className="mt-3 w-75 mx-auto">
          <FormGroup formId="formTitle" formLabel="Title" formType="text" />
          <FormGroup formId="formAuthor" formLabel="Author" formType="text" />
          <FormGroup formId="formDate" formLabel="Date" formType="date" />

          <CustomButton color="primary" text="Create" buttonClass="float-right my-3" />
        </Form>
    )}
    />
  </div>
);

export default CreateDocument;
