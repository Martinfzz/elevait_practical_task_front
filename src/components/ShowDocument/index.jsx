/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import strftime from 'strftime';
import { PagesManager, DocumentsManager } from '../../services';
import CreatePage from '../CreatePage';

const ShowDocument = ({ showPages }) => {
  const { documentSlug } = useParams();
  const [documentInfos, setDocumentInfos] = useState({});
  const [documentPages, setDocumentPages] = useState([]);
  const [createPage, setCreatePage] = useState(false);

  useEffect(() => {
    DocumentsManager.showDocument(documentSlug).then((data) => {
      setDocumentInfos(data.document);
      setDocumentPages(data.pages);
    });
  }, [documentSlug, createPage]);

  const handleSubmitCreatePage = (e) => {
    e.preventDefault();
    const text = e.target.formText.value;

    PagesManager.createPage((documentPages.length + 2), text, documentInfos.id).then((data) => {
      console.log(data);
      setCreatePage(false);
    });
  };

  const handleClick = () => {
    setCreatePage(true);
  };

  const handleCancelCreatePage = () => {
    setCreatePage(false);
  };

  return (
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
            {strftime('%F', new Date(documentInfos.dateCreated))}
          </Card.Text>
          <Card.Text>
            Pages:
            <br />
            <br />
            {documentPages.map((element) => <Link to={{ pathname: `/${documentInfos.id}/${element.id}` }}><Button variant="info" className="mr-2">{element.pageNr}</Button></Link>)}
          </Card.Text>
          {showPages && <Button variant="success" className="float-right rounded-circle" onClick={handleClick}>+</Button>}
        </Card.Body>
        {createPage && (
        <CreatePage
          submitCreatePage={handleSubmitCreatePage}
          cancelCreatePage={handleCancelCreatePage}
        />
        )}
      </Card>
    </div>
  );
};

export default ShowDocument;
