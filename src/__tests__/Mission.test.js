import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import Mission from '../components/navigation/Mission';

describe('User Interactions test', () => {
  const mission = [
    {
      id: 1,
      mission_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
    },
  ];

  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission mission={mission} />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
