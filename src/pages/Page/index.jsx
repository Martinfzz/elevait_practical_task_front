import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DocumentsManager, PagesManager } from '../../services';
import ShowDocument from '../../components/ShowDocument';
import ShowPage from '../../components/ShowPage';

const Page = () => {
  const { documentSlug } = useParams();
  const { pageSlug } = useParams([1]);
  const [documentInfos, setDocumentInfos] = useState({});
  const [documentPages, setDocumentPages] = useState([]);
  const [pageInfos, setPageInfos] = useState({});

  useEffect(() => {
    DocumentsManager.showDocument(documentSlug).then((data) => {
      setDocumentInfos(data.document);
      setDocumentPages(data.pages);
    });
    PagesManager.showPage(pageSlug).then((data) => {
      setPageInfos(data);
    });
  }, [documentSlug, pageSlug]);

  return (
    <>
      <ShowDocument documentInfos={documentInfos} documentPages={documentPages} showPages />
      <ShowPage pageInfos={pageInfos} />
    </>
  );
};

export default Page;
