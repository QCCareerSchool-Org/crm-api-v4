import { DateService } from './dateService.js';

interface NullableDateFixer {
  (d: Date): Date;
  (d: null): null;
  (d: Date | null): Date | null;
}

/**
 * Service for working with dates
 */
export interface IDateService {
  getDate: () => Date;
  getLocalDate: () => string;
  formatDateTime: (d: Date) => string;
  formatLocalDate: (d: Date) => string;
  fixPrismaReadDate: NullableDateFixer;
  fixPrismaWriteDate: NullableDateFixer;
}

export const dateService = new DateService();
