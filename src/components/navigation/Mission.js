import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMission, cancelReserve } from '../../redux/missions/missionsSlice';

function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(false);

  const handleJoinMission = () => {
    dispatch(reserveMission(id));
    setIsMember(true);
  };

  const handleLeaveMission = () => {
    dispatch(cancelReserve(id));
    setIsMember(false);
  };

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

        <span className="">{isMember ? 'Active Member' : 'Not A Member'}</span>
        {!reserved && (
          <button className="reserve-mission" type="button" onClick={handleJoinMission}>
            Join Mission
          </button>
        )}
        {reserved && (
          <button className="cancel-mission" type="button" onClick={handleLeaveMission}>
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
