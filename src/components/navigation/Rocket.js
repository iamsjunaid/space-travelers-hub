import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserve } from '../../redux/rockets/rocketsSlice';
import '../../styles/Rocket.css';

function Rocket({
  id, name, description, image,
}) {
  const dispatch = useDispatch();
  const reservedRocketIds = useSelector((state) => state.rockets.reservedRocketIds);
  const isReserved = reservedRocketIds.includes(id);

  const handleReserveClick = () => {
    if (isReserved) {
      dispatch(cancelReserve(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  return (
    <li className="rocket">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            {isReserved && <span className="reserved">Reserved</span>}
            {' '}
            <span>
              {description}
            </span>
          </p>
        </div>
        <button className={isReserved ? 'cancel-rocket' : 'reserve-rocket'} type="button" onClick={handleReserveClick}>
          {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
