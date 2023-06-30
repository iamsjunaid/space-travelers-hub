import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Dragons from '../components/Dragons';
import store from '../redux/store';

test('renders Dragons component correctly', () => {
  const dragon = {
    id: '1',
    name: 'Dragon Name',
    type: 'Dragon Type',
    image: 'dragon.jpg',
    description: 'Dragon Description',
    reserved: false,
  };

  const { container } = render(
    <Provider store={store}>
      <Dragons dragons={dragon} />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
