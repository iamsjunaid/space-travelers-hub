import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import MissionsList from '../components/navigation/MissionsList';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionsList />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
