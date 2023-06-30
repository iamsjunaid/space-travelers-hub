import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from "../components/NavBar";

test('renders Navbar correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  expect(container).toMatchSnapshot();
});
