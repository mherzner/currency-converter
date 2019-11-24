import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import GlobalContext from 'contexts/GlobalContext';
import Base from 'components/latestrates/Base';

const MOCKED_CONTEXT = {
  base: '',
  setBase: jest.fn()
};

describe('Base', () => {
  it('should render without crashing', async () => {
    const { getByPlaceholderText } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <Base />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByPlaceholderText(/base/i)).toBeInTheDocument());
  });

  it('should call `setBase` on change', async () => {
    const { getByText, getByRole, container } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <Base />
      </GlobalContext.Provider>
    );
    const selectButton = getByRole('button');
    expect(selectButton).not.toBeNull();
    UserEvent.click(selectButton);
    await waitForElement(() => getByText('USD'), { container });
    const itemClickable = getByText('USD');
    UserEvent.click(itemClickable);
    expect(MOCKED_CONTEXT.setBase).toBeCalledTimes(1);
  });
});