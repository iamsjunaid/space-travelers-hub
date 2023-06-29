import React from 'react';
import { useSelector } from 'react-redux';
import RocketsTable from './RocketsTable';
import DragonsTable from './DragonsTable';
import '../../styles/MyProfile.css';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { dragons } = useSelector((state) => state.dragons);
  const reserveDragon = dragons.filter((dragon) => dragon.reserved === true);

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
      <div className="">
        <h3>My Dragons</h3>
        {reserveDragon.length > 0 ? (
          <DragonsTable dragons={reserveDragon} />
        ) : (
          <div>No Dragons Reserved</div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
