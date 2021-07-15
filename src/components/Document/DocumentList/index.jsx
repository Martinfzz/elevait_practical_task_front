/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import play from '../../../assets/images/play.svg';
import CustomButton from '../../CustomComponents/CustomButton';
import Search from '../../Search';

const DocumentList = ({ data, addDocument }) => {
  const [filteredDocument, setFilteredDocument] = useState(data);

  const handleOnChange = (e) => {
    setFilteredDocument(data.filter(
      (element) => element.title.toLowerCase().includes(e.target.value.toLowerCase()),
    ));
  };
  return (
    <>
      <div className="mx-3 mt-5 mb-4">
        <Card style={{ maxWidth: '25rem' }} className="mx-auto border border-warning">
          <Card.Body>
            <Card.Title className="mb-3 text-center">
              Number of Documents:
              {' '}
              {filteredDocument.length}
            </Card.Title>
            <Search onChangeIpnut={handleOnChange} />
            <div className="d-flex flex-wrap">
              {filteredDocument.map((element) => (
                <Link to={{ pathname: `/${element.id}` }} className="w-100 mb-3" key={element.id}>
                  <Button variant="warning" className="w-100">
                    {element.title}
                    <img src={play} alt="right arrow to access selected document" height="20px" className="float-right pt-1" />
                  </Button>
                </Link>
              ))}
            </div>
            <CustomButton color="success" text="+" buttonClass="float-right rounded-circle mt-5" onClick={addDocument} />
          </Card.Body>
        </Card>
      </div>
      <br />
    </>
  );
};

export default DocumentList;
