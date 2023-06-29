import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/DragonsTable.css';

const DragonsTable = ({ dragons }) => (
  <table className="dragons-table">
    <tbody>
      {dragons.map((dragon) => (
        <tr key={dragon.id}>
          <td>{dragon.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

DragonsTable.propTypes = {
  dragons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DragonsTable;
