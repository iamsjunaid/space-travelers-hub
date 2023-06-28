import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMission, cancelReserve } from '../../redux/missions/missionsSlice';

function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <li className="mission">
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            <span>
              {description}
            </span>
          </p>
        </div>

        {!reserved && (
          <button
            className="reserve-mission"
            type="button"
            onClick={() => dispatch(reserveMission(id))}
          >
            Join Mission
          </button>
        )}
        {reserved && (
          <button
            className="cancel-mission"
            type="button"
            onClick={() => dispatch(cancelReserve(id))}
          >
            Leave Mission
          </button>
        )}
      </div>
    </li>
  );
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
