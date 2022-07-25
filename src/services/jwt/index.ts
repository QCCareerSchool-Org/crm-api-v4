import { privateKey, publicKey } from '../../keys';
import { JWTService } from './jwtService.js';

export interface IJWTService {
  sign: (payload: string | Record<string, unknown> | Buffer) => Promise<string>;
  verify: (token: string) => Promise<any>;
}

export const jwtService = new JWTService(privateKey, publicKey);
