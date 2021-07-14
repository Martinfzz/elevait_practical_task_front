/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const ShowPage = ({ pageInfos }) => (
  <Card style={{ width: '25rem' }} className="mx-auto mt-3 border border-warning">
    <Card.Body>
      <Card.Title className="mb-3 text-center font-weight-bold">
        Page
        {' '}
        {pageInfos.pageNr}
      </Card.Title>
      <Card.Text>
        {pageInfos.text}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ShowPage;
