import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  reserveMission,
  cancelReserve,
} from '../../redux/missions/missionsSlice';

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
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <span className="">
                {isMember ? 'Active Member' : 'Not A Member'}
              </span>
            </td>
            <td>
              {!reserved && (
                <button
                  className="reserve-mission"
                  type="button"
                  onClick={handleJoinMission}
                >
                  Join Mission
                </button>
              )}
              {reserved && (
                <button
                  className="cancel-mission"
                  type="button"
                  onClick={handleLeaveMission}
                >
                  Leave Mission
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
