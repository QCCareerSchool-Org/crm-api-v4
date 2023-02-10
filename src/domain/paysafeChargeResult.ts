export type PaysafeChargeResult = {
  transactionId: string | null;
  date: Date;
  amount: number;
  orderId: string;
  responseCode: number | null;
  authCode: string | null;
  settlementId: string | null;
  response: string | null;
};
