import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalogue</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
