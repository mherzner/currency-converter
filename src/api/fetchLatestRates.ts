import axios from 'axios';

import { baseUrl, RateResponse } from 'api';

export default (base: string, symbols: string[]): Promise<RateResponse> => (
  axios
    .get(`${baseUrl}/latest`, {
      params: {
        base,
        symbols: symbols.join(',')
      }
    })
    .then(response => { return { data: response.data } })
    .catch(error => { return { error } })
);
