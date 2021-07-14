/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import CustomModal from '../CustomModal';
import CustomButton from '../CustomButton';
import FormGroup from '../FormGroup';

const CreatePage = ({ submitCreatePage, show, onHide }) => (
  <div id="createDocument">
    <CustomModal
      show={show}
      onHide={onHide}
      content={(
        <Form onSubmit={(e) => submitCreatePage(e)} className="mt-3 w-75 mx-auto">
          <FormGroup formId="formText" formLabel="Text" formAs="textarea" formRows={3} />

          <CustomButton color="primary" text="Add Page" buttonClass="float-right my-3" />
        </Form>
    )}
    />
  </div>
);

export default CreatePage;
