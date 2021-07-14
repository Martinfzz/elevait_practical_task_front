/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const ShowPage = ({ pageInfos }) => (
  <div className="mx-3">
    <Card style={{ maxWidth: '25rem' }} className="mx-auto mt-3 border border-warning">
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
  </div>
);

export default ShowPage;
