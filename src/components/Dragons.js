import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Dragon.css';

const Dragons = ({
  id, name, type, image,
}) => (
  <div className="dragon-cont">
    <ul>
      <div>
        <img src={image} alt={name} />
      </div>
      <li>{id}</li>
      <li>{name}</li>
      <li>{type}</li>
    </ul>
  </div>
);

Dragons.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dragons;
