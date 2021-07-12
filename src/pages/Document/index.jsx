import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { DocumentsManager } from '../../services';

const Document = () => {
  const { documentSlug } = useParams();
  const [document, setDocument] = useState({});

  useEffect(() => {
    DocumentsManager.showDocument(documentSlug).then((data) => {
      setDocument(data);
    });
  }, [documentSlug]);

  return (
    <div className="text-center mt-5">
      <h3>
        Document
        {' '}
        {document.id}
      </h3>
      <Card style={{ width: '25rem' }} className="mx-auto mt-3 border border-warning">
        <Card.Body>
          <Card.Title className="mb-3 text-center font-weight-bold">
            {document.title}
          </Card.Title>
          <Card.Text>
            author:
            {' '}
            {document.author}
          </Card.Text>
          <Card.Text>
            date:
            {' '}
            {document.dateCreated}
          </Card.Text>
          <Card.Text>
            Pages:
          </Card.Text>
          <Button variant="success" className="float-end">+</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Document;
