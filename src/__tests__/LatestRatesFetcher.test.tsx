import React from 'react';
import { cleanup, render, wait } from '@testing-library/react';

import GlobalContext from 'contexts/GlobalContext';
import LatestRatesFetcher from 'components/latestrates/LatestRatesFetcher';

const MOCKED_CONTEXT = {
  base: '',
  symbols: [],
  result: {},
  setResult: jest.fn()
};

afterEach(cleanup);

describe('LatestRatesFetcher', () => {
  it('should render without crashing', async () => {
    const { getByTestId } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <LatestRatesFetcher />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByTestId('latest-rates-fetcher')).toBeInTheDocument());
  });

  it('should render a loading state', async () => {
    const { getByTestId } = render(
      <GlobalContext.Provider value={MOCKED_CONTEXT}>
        <LatestRatesFetcher />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByTestId('latest-rates-loading')).toBeInTheDocument());
  });

  it('should render an error state', async () => {
    const { getByTestId } = render(
      <GlobalContext.Provider value={{ ...MOCKED_CONTEXT, result: { error: true } }}>
        <LatestRatesFetcher />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByTestId('latest-rates-error')).toBeInTheDocument());
  });

  it('should render the data state', async () => {
    const data = {
      rates: { 'USD': 1.1 },
      base: 'EUR',
      date: 'random'
    }
    const { getByTestId } = render(
      <GlobalContext.Provider value={{ ...MOCKED_CONTEXT, result: { data } }}>
        <LatestRatesFetcher />
      </GlobalContext.Provider>
    );
    await wait(() => expect(getByTestId('latest-rates-data')).toBeInTheDocument());
  });
});