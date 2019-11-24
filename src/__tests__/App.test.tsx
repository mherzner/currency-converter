import React from 'react';
import { render, wait } from '@testing-library/react';

import App from 'components/App';

describe('App', () => {
  it('should render without crashing', async () => {
    const { getByTestId } = render(<App />);
    await wait(() => expect(getByTestId('app')).toBeInTheDocument());
  });
});