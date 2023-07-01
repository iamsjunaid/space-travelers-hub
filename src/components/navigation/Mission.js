// Mission.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  reserveMission,
  cancelReserve,
} from '../../redux/missions/missionsSlice';
import '../../styles/Mission.css';

function Mission({
  id, name, description,
}) {
  const dispatch = useDispatch();
  const reservedMissionIds = useSelector((state) => state.missions.reservedMissionIds);
  const isReserved = reservedMissionIds.includes(id);

  const handleJoinMission = () => {
    dispatch(reserveMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(cancelReserve(id));
  };

  return (
    <tr>
      <td><h4>{name}</h4></td>
      <td><span className="description">{description}</span></td>
      <td>
        <span className={`non_member ${isReserved ? 'active' : ''}`}>
          {isReserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        {!isReserved && (
          <button
            className="join-mission"
            type="button"
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        )}
        {isReserved && (
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
};

export default Mission;
