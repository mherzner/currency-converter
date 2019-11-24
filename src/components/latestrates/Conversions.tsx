import React, { useContext } from 'react';

import GlobalContext from 'contexts/GlobalContext';
import { convertCurrency } from 'utils';

const Conversions = () => {
  const { value, symbols, result: { data } } = useContext(GlobalContext);

  if (!value || !data || !data.rates || !symbols.length) return null;

  return (
    <div data-testid='conversions'>
      {symbols.map(symbol =>
        <div key={symbol}>{symbol}: {convertCurrency(value, data.rates[symbol])}</div>
      )}
    </div>
  );
};

export default Conversions;