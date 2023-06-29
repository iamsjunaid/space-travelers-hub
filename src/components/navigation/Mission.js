import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  reserveMission,
  cancelReserve,
} from '../../redux/missions/missionsSlice';
import '../../styles/Mission.css';

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
    <tr>
      <td><h4>{name}</h4></td>
      <td><span className="description">{description}</span></td>
      <td>
        <span className={`non_member ${isMember ? 'active' : ''}`}>
          {isMember ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        {!reserved && (
          <button
            className="join-mission"
            type="button"
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        )}
        {reserved && (
          <button
            className="leave-mission join-mission"
            type="button"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
