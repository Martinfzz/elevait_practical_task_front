import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DocumentsManager } from '../../services';
import ShowDocument from '../../components/ShowDocument';

const Document = () => {
  const { documentSlug } = useParams();
  const [document, setDocument] = useState({});
  const [pages, setPages] = useState([]);

  useEffect(() => {
    DocumentsManager.showDocument(documentSlug).then((data) => {
      setDocument(data.document);
      setPages(data.pages);
    });
  }, [documentSlug]);

  return (
    <ShowDocument documentInfos={document} documentPages={pages} />
  );
};

export default Document;
