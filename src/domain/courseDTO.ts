export type CourseDTO = {
  courseId: number;
  schoolId: number;
  variantId: number | null;
  code: string;
  name: string;
  prefix: string;
  maxAssignments: number | null;
  order: number;
  cost: number;
  // enrollmentCount is omitted
  created: Date;
  modified: Date | null;
};
