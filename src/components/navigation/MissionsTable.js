import React from 'react';
import PropTypes from 'prop-types';

function MissionsTable({ missions }) {
  return (
    <table className="missions-table">
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default MissionsTable;
