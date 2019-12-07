import React, { useEffect, useContext } from 'react';
import { InputLabel, MenuItem, FormControl, Select, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import GlobalContext from 'contexts/GlobalContext';

const useStyles = makeStyles({
  formControl: {
    minWidth: 200,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    marginLeft: 2,
    marginRight: 2,
    height: 19
  }
});

const Symbols: React.FC = () => {
  const { formControl, chips, chip } = useStyles();
  const { base, symbols, setSymbols, symbolList } = useContext(GlobalContext);

  useEffect(() => {
    if (symbols.includes(base)) {
      setSymbols(symbols.filter(symbol => symbol !== base));
    }
  }, [base, symbols, setSymbols]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSymbols(event.target.value as string[]);
  };

  return (
    <FormControl className={formControl}>
      <InputLabel id='symbols-label'>Symbols</InputLabel>
      <Select
        placeholder='Symbols'
        labelId='symbols-label'
        multiple
        value={symbols}
        onChange={handleChange}
        renderValue={selected => (
          <div className={chips}>
            {(selected as string[]).map(value => (
              <Chip key={value} label={value} className={chip} />
            ))}
          </div>
        )}
      >
        {symbolList.map(symbol => (
          <MenuItem key={symbol} value={symbol}>
            {symbol}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Symbols;
