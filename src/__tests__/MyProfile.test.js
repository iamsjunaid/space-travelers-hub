import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MyProfile from '../components/navigation/MyProfile';
import rocketsReducer from '../redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
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
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California.',
      image: 'https://i.imgur.com/9fWdwNv.jpg',
      reserved: false,
    },
    {
      id: 'dragon2',
      name: 'Dragon 2',
      description: 'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle.',
      image: 'https://i.imgur.com/9fWdwNv.jpg',
      reserved: true,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <MyProfile rockets={rockets} dragons={dragons} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByText('My Rockets')).toBeInTheDocument();
  expect(screen.getByText('My Dragons')).toBeInTheDocument();
});
