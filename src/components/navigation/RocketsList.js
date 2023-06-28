import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';
import '../../styles/RocketList.css';

function RocketsList() {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return <h2 className="rocketLoading">Loading...</h2>;
  }

  return (
    <ul className="rocketList">
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
