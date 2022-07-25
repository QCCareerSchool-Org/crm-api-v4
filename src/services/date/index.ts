import { DateService } from './dateService.js';

/**
 * Service for working with dates
 */
export interface IDateService {
  getDate: () => Date;
  formatDateTime: (date: Date) => string;
}

export const dateService = new DateService();
