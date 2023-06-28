/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmissions } from '../../redux/missions/missionsSlice';
import Mission from './Mission';

function MissionsList() {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmissions());
  }, [dispatch]);

  if (isLoading) {
    return <h2 className="missionLoading">Loading...</h2>;
  }

  return (
    <ul className="missionList">
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
          reserved={mission.reserved}

        />
      ))}
      ;
    </ul>
  );
}

export default MissionsList;
