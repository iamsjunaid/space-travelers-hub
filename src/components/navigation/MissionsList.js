import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import Mission from './Mission';

function MissionsList() {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2 className="missionLoading">Loading...</h2>;
  }

  return (
    <table className="missions-table-container">
      <colgroup>
        <col span={1} style={{ width: '7%' }} />
        <col span={1} style={{ width: '53%' }} />
        <col span={1} style={{ width: '10%' }} />
        <col span={1} style={{ width: '10%' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-hidden="true">{/* Empty cell as a placeholder */}</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MissionsList;
