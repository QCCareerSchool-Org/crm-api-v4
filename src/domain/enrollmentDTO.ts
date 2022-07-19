export type EnrollmentStatus = 'W' | 'H' | 'T' | 'G' | 'R' | null;

export type PaymentPlan = 'full' | 'accelerated' | 'extended';

export type PaymentFrequency = 'monthly' | 'weekly' | 'biWeekly';

export type EnrollmentDTO = {
  enrollmentId: number;
  studentId: number;
  courseId: number;
  currencyId: number;
  userId: number | null;
  enrollmentDate: Date | null;
  expiryDate: Date | null;
  paymentPlan: PaymentPlan;
  status: EnrollmentStatus;
  statusDate: Date | null;
  gradEmailDate: Date | null;
  gradEmailSkip: boolean;
  cost: number;
  discount: number;
  installment: number;
  noShipping: boolean;
  hideFromShippingList: boolean;
  paymentOverride: boolean;
  paymentFrequency: PaymentFrequency;
  paymentDay: number | null;
  paymentStart: Date | null;
  accountId: number | null;
  // shippingNote is omitted
  preparedDate: Date | null;
  shippedDate: Date | null;
  diploma: boolean;
  diplomaDate: Date | null;
  fastTrack: boolean;
  noStudentCenter: boolean;
  created: Date;
  modified: Date | null;
};
