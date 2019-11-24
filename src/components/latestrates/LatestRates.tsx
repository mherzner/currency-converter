import React from 'react';
import { Grid, CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Base from './Base';
import Value from './Value';
import Symbols from './Symbols';
import Conversions from './Conversions';

type Props = {
  testid?: string
};

const useStyles = makeStyles({
  gridItem: { marginBottom: 20 }
});

const LatestRates: React.FC<Props> = ({ testid }) => {
  const { gridItem } = useStyles();
  return (
    <>
      <CardHeader title="Latest Rates" subheader="Currency conversion" data-testid={testid} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3} className={gridItem}>
            <Value />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={gridItem}>
            <Base />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={gridItem}>
            <Symbols />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={gridItem}>
            <Conversions />
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default LatestRates;
