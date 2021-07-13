import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DocumentsManager } from '../../services';
import CreateDocument from '../../components/CreateDocument';
import play from '../../assets/images/play.svg';

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
            {nbDocuments.map((element) => (
              <Link to={{ pathname: `/${element.id}` }} className="w-100 mb-3">
                <Button key={element.id} variant="warning" className="w-100">
                  {element.title}
                  <img src={play} alt="right arrow to access selected document" height="20px" className="float-right pt-1" />
                </Button>
              </Link>
            ))}
          </div>
          <Button variant="success" className="float-right rounded-circle mt-5" onClick={handleClick}>+</Button>
        </Card.Body>
        )}
        <CreateDocument
          submitCreateDocument={handleSubmitCreateDocument}
          show={createDocument}
          onHide={handleCancelCreateDocument}
        />
      </Card>
    </>
  );
};

export default Home;
