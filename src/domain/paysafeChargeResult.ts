export type PaysafeChargeResult = {
  date: Date;
  amount: number;
  orderId: string;
  responseCode: number | null;
  authCode: string | null;
  settlementId: string | null;
  response: string | null;
};
