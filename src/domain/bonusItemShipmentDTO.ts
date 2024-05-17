export type BonusItemShipmentDTO = {
  /** UUID string */
  bonusItemShipmentId: string;
  enrollmentId: number;
  /** UUID string */
  bonusItemId: string;
  threshold: number | null;
  qualified: Date | null;
  prepared: Date | null;
  shipped: Date | null;
  created: Date;
};
