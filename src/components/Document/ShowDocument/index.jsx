/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import strftime from 'strftime';
import { PagesManager, DocumentsManager, UiManager } from '../../../services';
import CreatePage from '../../Page/CreatePage';
import CustomButton from '../../CustomComponents/CustomButton';

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

  const handleSubmitCreatePage = async (e) => {
    e.preventDefault();
    const text = e.target.formText.value;

    try {
      await PagesManager.createPage((documentPages.length + 1), text, documentInfos.id);
      setCreatePage(false);
      UiManager.openNotification('success', 'Page created 😉');
    } catch (error) {
      UiManager.openNotification('warning', 'Something went wrong...');
    }
  };

  const handleClick = () => {
    setCreatePage(true);
  };

  const handleCancelCreatePage = () => {
    setCreatePage(false);
  };

  return (
    <div className="text-center mt-5 mx-3">
      <h3>
        Document
        {' '}
        {documentInfos.id}
      </h3>
      <Card style={{ maxWidth: '25rem' }} className="mx-auto mt-3 border border-warning">
        <Card.Body>
          <Card.Title className="mb-3 text-center font-weight-bold">
            {documentInfos.title}
          </Card.Title>
          <Card.Text>
            Author:
            {' '}
            {documentInfos.author}
          </Card.Text>
          <Card.Text>
            Date:
            {' '}
            {strftime('%F', new Date(documentInfos.dateCreated))}
          </Card.Text>
          <Card.Text>
            Pages:
            <br />
            <br />
            {documentPages.map((element) => <Link to={{ pathname: `/${documentInfos.id}/${element.id}` }} key={element.id}><CustomButton color="info" text={element.pageNr} buttonClass="mr-2" /></Link>)}
          </Card.Text>
          {showPages && <CustomButton color="success" text="+" buttonClass="float-right rounded-circle" onClick={handleClick} />}
        </Card.Body>
      </Card>
      {createPage && (
      <CreatePage
        submitCreatePage={handleSubmitCreatePage}
        show={createPage}
        onHide={handleCancelCreatePage}
      />
      )}
    </div>
  );
};

export default ShowDocument;
