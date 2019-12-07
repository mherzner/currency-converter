import React, { useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import GlobalContext from 'contexts/GlobalContext';
import { symbolList as defaultSymbolList } from 'utils'

const useStyles = makeStyles({
  formControl: {
    minWidth: 200,
    maxWidth: 300,
  }
});

const Base: React.FC = () => {
  const { formControl } = useStyles();
  const { base, setBase, symbolList, setSymbolList } = useContext(GlobalContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBase(event.target.value as string);
    if (symbolList.includes(event.target.value as string)) {
      setSymbolList(defaultSymbolList.filter(symbol => symbol !== event.target.value));
    }
  };

  return (
    <FormControl className={formControl}>
      <InputLabel id='base-label'>Base</InputLabel>
      <Select
        placeholder='Base'
        labelId='base-label'
        value={base}
        onChange={handleChange}
      >
        <MenuItem value='EUR'>EUR</MenuItem>
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='GBP'>GBP</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Base;
