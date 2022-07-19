export type CurrencyDTO = {
  currencyId: number;
  code: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  created: Date;
  modified: Date | null;
};
