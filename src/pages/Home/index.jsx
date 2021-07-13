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
  }, [createDocument]);

  const handleClick = () => {
    setCreateDocument(true);
  };

  const handleSubmitCreateDocument = (e) => {
    e.preventDefault();
    const title = e.target.formTitle.value;
    const author = e.target.formAuthor.value;
    const date = e.target.formDate.value;

    DocumentsManager.createDocument(title, author, date).then((data) => {
      console.log(data);
      setCreateDocument(false);
    });
  };

  const handleCancelCreateDocument = () => {
    setCreateDocument(false);
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
        {createDocument && (
        <CreateDocument
          submitCreateDocument={handleSubmitCreateDocument}
          cancelCreateDocument={handleCancelCreateDocument}
        />
        )}
      </Card>
    </>
  );
};

export default Home;
