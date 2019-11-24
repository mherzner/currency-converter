import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import GlobalContextProvider from 'contexts/GlobalContextProvider';
import LatestRatesFetcher from 'components/latestrates/LatestRatesFetcher';

const useStyles = makeStyles({
  root: { display: 'flex' }
});

const App: React.FC = () => {
  const { root } = useStyles();

  return (
    <GlobalContextProvider>
      <Container maxWidth='lg' data-testid='app'>
        <Grid container className={root} spacing={2}>
          <LatestRatesFetcher />
        </Grid>
      </Container>
    </GlobalContextProvider>
  );
};

export default App;
