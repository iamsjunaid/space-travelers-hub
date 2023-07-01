import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';
import '../../styles/RocketsList.css';

function RocketsList() {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2 className="rocketsLoading">Loading...</h2>;
  }

  return (
    <ul className="rocketsList">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
      ;
    </ul>
  );
}

export default RocketsList;
