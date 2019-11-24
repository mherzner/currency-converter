export const convertCurrency = (value: string, rate: number) => (parseFloat(value) * rate).toFixed(4);
