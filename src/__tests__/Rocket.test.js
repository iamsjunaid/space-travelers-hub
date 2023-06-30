import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import Rocket from '../components/navigation/Rocket';

describe('User Interactions test', () => {
  const rocket = [
    {
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon9.jpg',
    },
  ];

  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket rocket={rocket} />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
