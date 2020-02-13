import React, { useEffect, useContext } from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { fetchLatestRates } from 'api';
import GlobalContext from 'contexts/GlobalContext';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import LatestRates from './LatestRates';

const useStyles = makeStyles({
  card: { minHeight: 50 }
});

const LatestRatesFetcher: React.FC = () => {
  const { card } = useStyles();
  const { base, symbols, result, setResult } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const filteredSymbols = symbols.filter(symbol => symbol !== base);
      const { data, error } = await fetchLatestRates(base, filteredSymbols);

      if (error) setResult({ error });
      if (data) setResult({ data });
    })()
  }, [base, symbols, setResult]);

  const { data, error } = result;

  return (
    <Grid item xs={12}>
      <Card className={card} data-testid='latest-rates-fetcher'>
        {!error && !data && <Loading testid='latest-rates-loading' />}
        {error && <Error testid='latest-rates-error' />}
        {data && <LatestRates testid='latest-rates-data' />}
      </Card>
    </Grid>
  );
};

export default LatestRatesFetcher;
