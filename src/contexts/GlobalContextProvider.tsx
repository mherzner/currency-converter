import React, { useState } from 'react';

import GlobalContext from './GlobalContext';

const GlobalContextProvider: React.FC = props => {
  const [base, setBase] = useState('EUR');
  const [symbols, setSymbols] = useState(['GBP', 'USD']);
  const [value, setValue] = useState('');
  const [result, setResult] = useState({});

  return (
    <GlobalContext.Provider value={{
      base,
      symbols,
      value,
      result,
      setBase,
      setSymbols,
      setValue,
      setResult
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;
