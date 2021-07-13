/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import FormGroup from '../FormGroup';

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
        <FormGroup form="formText" formLabel="Text" formAs="textarea" formRows={3} />

        <CustomButton color="primary" text="Add Page" buttonClass="float-right my-3" />
      </Form>
    </Modal>
  </div>
);

export default CreatePage;
