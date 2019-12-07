import React from 'react';

import { RateResponse } from 'api';

type Context = {
  base: string,
  symbols: string[],
  symbolList: string[],
  value: string,
  result: RateResponse,
  setBase: (base: string) => void,
  setSymbols: (symbols: string[]) => void,
  setSymbolList: (symbols: string[]) => void,
  setValue: (value: string) => void,
  setResult: (result: RateResponse) => void
}

const GlobalContext = React.createContext<Context>({
  base: '',
  symbols: [],
  symbolList: [],
  value: '',
  result: {},
  setBase: () => { },
  setSymbols: () => { },
  setSymbolList: () => { },
  setValue: () => { },
  setResult: () => { }
});

export default GlobalContext;
