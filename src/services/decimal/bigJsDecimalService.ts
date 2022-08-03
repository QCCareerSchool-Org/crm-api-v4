import Big from 'big.js';

import type { IDecimalService } from '.';

export class BigJsDecimalService implements IDecimalService {

  public add(a: number, b: number): number {
    return Big(a).plus(b).toNumber();
  }

  public subtract(a: number, b: number): number {
    return Big(a).minus(b).toNumber();
  }
}
