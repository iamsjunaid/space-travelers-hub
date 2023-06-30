import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MyProfile from '../components/navigation/MyProfile';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import missionsReducer from '../redux/missions/missionsSlice';
import dragonsReducer from '../redux/dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

test('renders ProfileRockets correctly', () => {
  const rockets = [
    {
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon9.jpg',
      reserved: false,
    },
    {
      id: 2,
      rocket_name: 'Falcon 10',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon10.jpg',
      reserved: true,
    },
  ];

  const dragons = [
    {
      id: 'dragon1',
      name: 'Dragon 1',
      description:
        'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California.',
      image: 'https://i.imgur.com/9fWdwNv.jpg',
      reserved: false,
    },
    {
      id: 'dragon2',
      name: 'Dragon 2',
      description:
        'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle.',
      image: 'https://i.imgur.com/9fWdwNv.jpg',
      reserved: true,
    },
  ];

  const missions = [
    {
      mission_id: '9D1B7E0',
      mission_name: 'Thaicom',
      description:
        'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited',
      reserved: false,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <MyProfile rockets={rockets} dragons={dragons} missions={missions} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByText('My Rockets')).toBeInTheDocument();
  expect(screen.getByText('My Dragons')).toBeInTheDocument();
});
