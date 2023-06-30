import React from 'react';
import { useSelector } from 'react-redux';
import RocketsTable from './RocketsTable';
import DragonsTable from './DragonsTable';
import MissionsTable from './MissionsTable';
import '../../styles/MyProfile.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
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
      <div className="missions-profile">
        <h3>My Missions</h3>
        {reservedMissions.length > 0 ? (
          <MissionsTable missions={reservedMissions} className="missions-table" />
        ) : (
          <div>No Missions Reserved</div>
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
