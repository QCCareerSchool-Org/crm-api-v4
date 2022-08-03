import { BigJsDecimalService } from './bigJsDecimalService';

export interface IDecimalService {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

export const bigJsDecimalService = new BigJsDecimalService();
