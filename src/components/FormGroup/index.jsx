/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FormGroup = ({
  formId, formLabel, formType, formAs, formRows,
}) => (
  <Form.Group as={Row} controlId={formId}>
    <Form.Label column sm={2}>{formLabel}</Form.Label>
    <Col sm={10}>
      <Form.Control type={formType} as={formAs} rows={formRows} />
    </Col>
  </Form.Group>
);

export default FormGroup;
