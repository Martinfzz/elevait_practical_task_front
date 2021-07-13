import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DocumentsManager } from '../../services';
import CreateDocument from '../../components/CreateDocument';

const Home = () => {
  const [nbDocuments, setNbDocuments] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const [createDocument, setCreateDocument] = useState(false);

  useEffect(() => {
    DocumentsManager.indexDocuments().then((data) => {
      setNbDocuments(data);
      setIsFetched(true);
    });
  }, []);

  const handleClick = () => {
    setCreateDocument(true);
  };

  return (
    <>
      <Card style={{ width: '25rem' }} className="mx-auto mt-5 border border-warning">
        { isFetched && (
        <Card.Body>
          <Card.Title className="mb-3 text-center">
            Number of Documents:
            {' '}
            {nbDocuments.length}
          </Card.Title>
          <div className="d-flex flex-wrap">
            {nbDocuments.map((element) => <Link to={{ pathname: `/${element.id}` }} className="w-100 mb-3"><Button key={element.id} variant="warning">{element.title}</Button></Link>)}
          </div>
          <Button variant="success" className="float-end" onClick={handleClick}>+</Button>
        </Card.Body>
        )}
      </Card>
      {createDocument && <CreateDocument />}
    </>
  );
};

export default Home;
