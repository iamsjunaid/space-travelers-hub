import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/RocketsTable.css';

function RocketsTable({ rockets }) {
  return (
    <table className="rockets-table">
      <tbody>
        {rockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

RocketsTable.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default RocketsTable;
