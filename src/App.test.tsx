import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Application from './views/Application';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Application />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
