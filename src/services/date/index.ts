import { DateService } from './dateService.js';

/**
 * Service for working with dates
 */
export interface IDateService {
  getDate: () => Date;
  getLocalDate: () => string;
  formatDateTime: (d: Date) => string;
  formatLocalDate: (d: Date) => string;
}

export const dateService = new DateService();
