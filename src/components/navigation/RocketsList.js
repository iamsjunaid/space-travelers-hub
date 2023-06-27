import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

function RocketsList() {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  if (isLoading) {
    return <h2 className="rocketLoading">Loading...</h2>;
  }

  return (
    <ul className="rocketList">
      <li>{rockets}</li>
    </ul>
  );
}

export default RocketsList;
