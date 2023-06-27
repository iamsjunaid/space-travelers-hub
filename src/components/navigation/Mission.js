import React from 'react';
import PropTypes from 'prop-types';

function Mission({ name, description }) {
  return (
    <li className="rocket">
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
