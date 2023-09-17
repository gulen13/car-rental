import React from 'react';
import { NotFoundStd } from './NotFound.styled';
import PropTypes from 'prop-types';

const NotFound = ({ text }) => {
  return <NotFoundStd>{text}</NotFoundStd>;
};

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFound;
