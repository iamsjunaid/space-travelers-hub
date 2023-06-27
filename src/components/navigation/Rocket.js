import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Rocket.css';

function Rocket({ name, description, image }) {
  return (
    <li className="rocket">
      <img src={image} alt="rocket" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
