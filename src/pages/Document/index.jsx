import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DocumentsManager } from '../../services';
import ShowDocument from '../../components/ShowDocument';

const Document = () => {
  const { documentSlug } = useParams();
  const [documentInfos, setDocumentInfos] = useState({});
  const [documentPages, setDocumentPages] = useState([]);

  useEffect(() => {
    DocumentsManager.showDocument(documentSlug).then((data) => {
      setDocumentInfos(data.document);
      setDocumentPages(data.pages);
    });
  }, [documentSlug]);

  return (
    <ShowDocument documentInfos={documentInfos} documentPages={documentPages} showPages={false} />
  );
};

export default Document;
