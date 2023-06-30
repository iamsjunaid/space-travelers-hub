import React from 'react';
import { useSelector } from 'react-redux';
import RocketsTable from './RocketsTable';
import DragonsTable from './DragonsTable';
import '../../styles/MyProfile.css';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const dragonsState = useSelector((state) => state.dragons);
  // eslint-disable-next-line no-unneeded-ternary
  const { dragons } = dragonsState ? dragonsState : { dragons: [] };
  const reserveDragon = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div className="my-profile">
      <div className="rockets-profile">
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 ? (
          <RocketsTable rockets={reservedRockets} className="rockets-table" />
        ) : (
          <div>No Rockets Reserved</div>
        )}
      </div>
      <div className="dragons-profile">
        <h3>My Dragons</h3>
        {reserveDragon.length > 0 ? (
          <DragonsTable dragons={reserveDragon} className="dragons-table" />
        ) : (
          <div>No Dragons Reserved</div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
