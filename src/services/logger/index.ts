import { winston } from '../../frameworks/winston';
import { WinstonLoggerService } from './winstonLoggerService.js';

export interface ILoggerService {
  error: (message: string, ...meta: unknown[]) => void;
  warn: (message: string, ...meta: unknown[]) => void;
  info: (message: string, ...meta: unknown[]) => void;
}

export const winstonLoggerService = new WinstonLoggerService(winston);
