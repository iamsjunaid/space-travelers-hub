import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DragonsList from '../components/navigation/DragonsList';

test('renders DragonsList component correctly', () => {
  const dragons = [
    {
      id: '1',
      name: 'Dragon Name 1',
      type: 'Dragon Type 1',
      image: 'dragon1.jpg',
      description: 'Dragon Description 1',
      reserved: false,
    },
    {
      id: '2',
      name: 'Dragon Name 2',
      type: 'Dragon Type 2',
      image: 'dragon2.jpg',
      description: 'Dragon Description 2',
      reserved: true,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <DragonsList dragons={dragons} />
    </Provider>,
  );
  expect(container.innerHTML).toMatchSnapshot();
});
