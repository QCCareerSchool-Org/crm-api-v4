export type CourseDTO = {
  courseId: number;
  schoolId: number;
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
