export type BonusItemDTO = {
  /** UUID string */
  bonusItemId: string;
  name: string;
  description: string;
  enabled: boolean;
  default: boolean;
  shipImmediately: boolean;
  threshold: number | null;
  created: Date;
  modified: Date | null;
};
