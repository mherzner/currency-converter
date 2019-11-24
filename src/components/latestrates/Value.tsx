import React, { useContext } from 'react';
import { TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import GlobalContext from 'contexts/GlobalContext';

const useStyles = makeStyles({
  formControl: {
    minWidth: 200,
    maxWidth: 300
  }
});

const Value: React.FC = () => {
  const { formControl } = useStyles();
  const { value, setValue } = useContext(GlobalContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl className={formControl}>
      <TextField
        label="Value"
        onChange={handleChange}
        placeholder="Value"
        value={value}
        type="number"
      />
    </FormControl>

  );
};

export default Value;
