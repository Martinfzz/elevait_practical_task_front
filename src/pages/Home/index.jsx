import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DocumentsManager, UiManager } from '../../services';
import CreateDocument from '../../components/Document/CreateDocument';
import DocumentList from '../../components/Document/DocumentList';

const Home = () => {
  const isFetched = useSelector((registerStore) => registerStore.loaded);
  const nbDocuments = useSelector((registerStore) => registerStore.documents);
  const [createDocument, setCreateDocument] = useState(false);

  useEffect(() => {
    DocumentsManager.indexDocuments();
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
