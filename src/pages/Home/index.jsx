import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DocumentsManager } from '../../services';

const Home = () => {
  const [nbDocuments, setNbDocuments] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    DocumentsManager.indexDocuments().then((data) => {
      setNbDocuments(data);
      setIsFetched(true);
    });
  }, []);

  return (
    <Card style={{ width: '25rem' }} className="mx-auto mt-5">
      { isFetched && (
      <Card.Body>
        <Card.Title className="mb-3 text-center">
          Number of Documents:
          {' '}
          {nbDocuments.length}
        </Card.Title>
        <div className="d-flex flex-wrap">
          {nbDocuments.map((element) => <Button key={element.id} variant="info" className="w-100 mb-3">{element.title}</Button>)}
        </div>
        <Button variant="success" className="float-end">+</Button>
      </Card.Body>
      )}
    </Card>
  );
};

export default Home;
