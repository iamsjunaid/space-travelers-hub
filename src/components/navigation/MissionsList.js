/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmissions } from '../../redux/missions/missionsSlice';

function MissionsList() {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmissions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h2 className="missionLoading">Loading...</h2>;
  }

  return (
    <div>
      mission list
      <table>
        <thead>
          <tr>
            <td>mission_id</td>
            <td>mission_name</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionsList;
