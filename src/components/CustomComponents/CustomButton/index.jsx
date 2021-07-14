/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({
  color, text, buttonClass, onClick,
}) => (
  <Button variant={color} type="submit" className={buttonClass} onClick={onClick}>
    {text}
  </Button>
);

export default CustomButton;
