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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h2 className="rocketLoading">Loading...</h2>;
  }

  return (
    <ul className="rocketList">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
        />
      ))}
      ;
    </ul>
  );
}

export default RocketsList;
