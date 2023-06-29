import React from 'react';
import { useSelector } from 'react-redux';
import RocketsTable from './RocketsTable';
import '../../styles/MyProfile.css';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
      <div className="rocketsProfile">
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 ? (
          <RocketsTable rockets={reservedRockets} />
        ) : (
          <div>No Rockets Reserved</div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
