import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveDragon } from '../redux/dragons/dragonsSlice';
import '../styles/Dragon.css';

function Dragons({
  id, name, type, image, description,
}) {
  const dispatch = useDispatch();
  const reservedDragonIds = useSelector((state) => state.dragons.reservedDragonIds);
  const isReserved = reservedDragonIds.includes(id);

  const handleJoinMission = () => {
    dispatch(reserveDragon(id));
  };

  const handleLeaveMission = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <li className="dragon">
      <img src={image} alt={name} />
      <div>
        <p>
          {isReserved && <span className="reserved">Reserved</span>}
          {' '}
          <span className="heading">
            {name}
          </span>
        </p>
        <p>
          <span>
            {type}
          </span>
        </p>
        <p>
          <span>
            {description}
          </span>
        </p>

        {!isReserved && (
          <button className="reserve-btn" type="button" onClick={handleJoinMission()}>
            Reserve Dragon
          </button>
        )}
        {isReserved && (
          <button className="cancel" type="button" onClick={handleLeaveMission()}>
            Cancel Reservation
          </button>
        )}
      </div>
    </li>

  );
}

Dragons.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dragons;
