/* eslint-disable react/prop-types */
import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Search = ({ onChangeIpnut }) => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder="I search"
      aria-label="I search"
      id="searchInput"
      onChange={(e) => onChangeIpnut(e)}
    />
  </InputGroup>
);

export default Search;
