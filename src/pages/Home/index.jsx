import React, { useEffect, useState } from 'react';
import { DocumentsManager, UiManager } from '../../services';
import CreateDocument from '../../components/Document/CreateDocument';
import DocumentList from '../../components/Document/DocumentList';

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

  const handleSubmitCreateDocument = async (e) => {
    e.preventDefault();
    const title = e.target.formTitle.value;
    const author = e.target.formAuthor.value;
    const date = e.target.formDate.value;

    try {
      await DocumentsManager.createDocument(title, author, date);
      setCreateDocument(false);
      UiManager.openNotification('success', 'Document created 😉');
    } catch (error) {
      UiManager.openNotification('warning', 'Something went wrong...');
    }
  };

  const handleCancelCreateDocument = () => {
    setCreateDocument(false);
  };

  return (
    <>
      { isFetched && <DocumentList data={nbDocuments} addDocument={handleClick} />}
      <CreateDocument
        submitCreateDocument={handleSubmitCreateDocument}
        show={createDocument}
        onHide={handleCancelCreateDocument}
      />
    </>
  );
};

export default Home;
