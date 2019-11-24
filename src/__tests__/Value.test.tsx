import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import GlobalContext from 'contexts/GlobalContext';
import Value from 'components/latestrates/Value';

const MOCKED_CONTEXT = {
  value: '',
  setValue: jest.fn()
};


describe('Value', () => {
  it('should render without crashing', async () => {
    const { getByPlaceholderText } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <Value />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByPlaceholderText(/value/i)).toBeInTheDocument());
  });

  it('should call `setValue` on change', async () => {
    const { getByPlaceholderText } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <Value />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByPlaceholderText(/value/i)).toBeInTheDocument());
    fireEvent.change(getByPlaceholderText(/value/i), { target: { value: '1' } });
    expect(MOCKED_CONTEXT.setValue).toBeCalledTimes(1);
  });
});
