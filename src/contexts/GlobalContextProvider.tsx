import React, { useState } from 'react';

import GlobalContext from './GlobalContext';
import { symbolList as defaultSymbolList } from 'utils';

const GlobalContextProvider: React.FC = props => {
  const [base, setBase] = useState('EUR');
  const [symbols, setSymbols] = useState(['GBP', 'USD']);
  const [value, setValue] = useState('');
  const [result, setResult] = useState({});
  const [symbolList, setSymbolList] = useState(defaultSymbolList);

  return (
    <GlobalContext.Provider value={{
      base,
      symbols,
      symbolList,
      value,
      result,
      setBase,
      setSymbols,
      setSymbolList,
      setValue,
      setResult
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;
