import React from 'react';

import { RateResponse } from 'api';

type Context = {
  base: string,
  symbols: string[],
  value: string,
  result: RateResponse,
  setBase: (base: string) => void,
  setSymbols: (symbols: string[]) => void,
  setValue: (value: string) => void,
  setResult: (result: RateResponse) => void
}

const GlobalContext = React.createContext<Context>({
  base: '',
  symbols: [],
  value: '',
  result: {},
  setBase: () => { },
  setSymbols: () => { },
  setValue: () => { },
  setResult: () => { }
});

export default GlobalContext;
