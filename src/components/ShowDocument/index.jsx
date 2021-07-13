/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShowDocument = ({ documentInfos, documentPages }) => (
  <div className="text-center mt-5">
    <h3>
      Document
      {' '}
      {documentInfos.id}
    </h3>
    <Card style={{ width: '25rem' }} className="mx-auto mt-3 border border-warning">
      <Card.Body>
        <Card.Title className="mb-3 text-center font-weight-bold">
          {documentInfos.title}
        </Card.Title>
        <Card.Text>
          author:
          {' '}
          {documentInfos.author}
        </Card.Text>
        <Card.Text>
          date:
          {' '}
          {documentInfos.dateCreated}
        </Card.Text>
        <Card.Text>
          Pages:
          {documentPages.map((element) => <Button variant="info">{element.pageNr}</Button>)}
        </Card.Text>
        <Button variant="success" className="float-end">+</Button>
      </Card.Body>
    </Card>
  </div>
);

export default ShowDocument;
