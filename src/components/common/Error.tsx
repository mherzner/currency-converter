import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';

type Props = {
  testid?: string
};

const Error: React.FC<Props> = ({ testid }) => (
  <>
    <CardHeader title="Aw shucks..." subheader="An error occured" data-testid={testid} />
    <CardContent>Something went wrong</CardContent>
  </>
);

export default Error;
