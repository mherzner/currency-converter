export type RatesData = {
  base: string,
  date: string,
  rates: {
    [key: string]: number
  }
};

export type RateResponse = {
  data?: RatesData,
  error?: Error
};
