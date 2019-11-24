import React from 'react';
import { render, wait } from '@testing-library/react';

import GlobalContext from 'contexts/GlobalContext';
import Conversions from 'components/latestrates/Conversions';

const MOCKED_CONTEXT = {
  value: '10',
  symbols: ['USD'],
  result: {
    data: {
      rates: { 'USD': 1.1 },
      base: 'EUR',
      date: 'random'
    }
  }
};

describe('Conversions', () => {
  describe('should not render anything', () => {
    it('if no value is given', async () => {
      const { queryByTestId } = render(
        <GlobalContext.Provider value={{ ...MOCKED_CONTEXT, value: '' }}>
          <Conversions />
        </GlobalContext.Provider>
      );
      await wait(() => expect(queryByTestId('conversions')).toBeNull());
    });

    it('if no symbols are given', async () => {
      const { queryByTestId } = render(
        <GlobalContext.Provider value={{ ...MOCKED_CONTEXT, symbols: [] }}>
          <Conversions />
        </GlobalContext.Provider>
      );
      await wait(() => expect(queryByTestId('conversions')).toBeNull());
    });

    it('if no data is available', async () => {
      const { queryByTestId } = render(
        <GlobalContext.Provider value={{ ...MOCKED_CONTEXT, result: {} }}>
          <Conversions />
        </GlobalContext.Provider>
      );
      await wait(() => expect(queryByTestId('conversions')).toBeNull());
    });
  });

  describe('should render conversions based on given value, symbols & rates', () => {
    it('without crashing', async () => {
      const { getByTestId } = render(
        <GlobalContext.Provider value={MOCKED_CONTEXT}>
          <Conversions />
        </GlobalContext.Provider>
      );
      await wait(() => expect(getByTestId('conversions')).toBeInTheDocument());
    });
  });
});