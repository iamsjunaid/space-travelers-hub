import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveDragon } from '../redux/dragons/dragonsSlice';
import '../styles/Dragon.css';

function Dragons({
  id, name, type, image, reserved,
}) {
  const dispatch = useDispatch();

  return (
    <li className="dragon">
      <img src={image} alt={name} />
      <div>
        <p>{id}</p>

        <p>
          {reserved && <span className="reserved">Reserved</span>}
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

        {!reserved && (
        <button className="reserve-btn" type="button" onClick={() => dispatch(reserveDragon(id))}>
          Reserve Dragon
        </button>
        )}
        {reserved && (
        <button className="cancel" type="button" onClick={() => dispatch(cancelReservation(id))}>
          Cancel Reservation
        </button>
        )}
      </div>
    </li>

  );
}

Dragons.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragons;
