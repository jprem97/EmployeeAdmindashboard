import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

test('renders app root without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const nodes = screen.getAllByText(/Portal|Command Center|Team Management/i);
  expect(nodes.length).toBeGreaterThan(0);
});
