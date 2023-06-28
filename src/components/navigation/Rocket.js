import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserve } from '../../redux/rockets/rocketsSlice';
import '../../styles/Rocket.css';

function Rocket({
  id, name, description, image, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <li className="rocket">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            {reserved && <span className="reserved">Reserved</span>}
            {' '}
            <span>
              {description}
            </span>
          </p>
        </div>
        {!reserved && (
          <button className="reserve-rocket" type="button" onClick={() => dispatch(reserveRocket(id))}>
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button className="cancel-rocket" type="button" onClick={() => dispatch(cancelReserve(id))}>
            Cancel Reservation
          </button>
        )}
      </div>
    </li>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
