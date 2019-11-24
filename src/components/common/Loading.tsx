import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Props = {
  testid?: string
};

const useStyles = makeStyles({
  loading: { padding: 20 }
});

const Loading: React.FC<Props> = ({ testid }) => {
  const { loading } = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <CircularProgress className={loading} data-testid={testid} />
    </Grid>
  );
};

export default Loading;