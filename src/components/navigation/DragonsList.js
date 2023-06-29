import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragonsSlice';
import Dragons from '../Dragons';

function DragonsList() {
  const { dragons, isLoading } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (!dragons || dragons.length === 0) {
    return <p>No dragons found.</p>;
  }

  return (
    <div>
      <ul>
        {dragons.map((dragon) => (
          <Dragons
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            type={dragon.type}
            image={dragon.image}
            description={dragon.description}
            reserved={dragon.reserved}
          />
        ))}
      </ul>
    </div>
  );
}
export default DragonsList;
