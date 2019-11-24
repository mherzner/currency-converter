import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import GlobalContext from 'contexts/GlobalContext';
import Symbols from 'components/latestrates/Symbols';

const MOCKED_CONTEXT = {
  symbols: [],
  setSymbols: jest.fn()
};

describe('Symbols', () => {
  it('should render without crashing', async () => {
    const { getByPlaceholderText } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT} >
        <Symbols />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByPlaceholderText(/symbols/i)).toBeInTheDocument());
  });

  it('should call `setSymbols` on change', async () => {
    const { getByText, getByRole, container } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <Symbols />
      </GlobalContext.Provider>
    );
    const selectButton = getByRole('button');
    expect(selectButton).not.toBeNull();
    UserEvent.click(selectButton);
    await waitForElement(() => getByText('USD'), { container });
    const itemClickable = getByText('USD');
    UserEvent.click(itemClickable);
    expect(MOCKED_CONTEXT.setSymbols).toBeCalledTimes(1);
  });
});