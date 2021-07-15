import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PagesManager } from '../../services';
import ShowDocument from '../../components/Document/ShowDocument';
import ShowPage from '../../components/Page/ShowPage';

const Page = () => {
  const { pageSlug } = useParams([1]);
  const [pageInfos, setPageInfos] = useState({});

  useEffect(() => {
    PagesManager.showPage(pageSlug).then((data) => {
      setPageInfos(data);
    });
  }, [pageSlug]);

  return (
    <>
      <ShowDocument showPages={false} />
      <ShowPage pageInfos={pageInfos} />
    </>
  );
};

export default Page;
