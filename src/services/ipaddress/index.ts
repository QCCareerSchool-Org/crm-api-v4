import { IpaddrJSIPAddressService } from './ipaddrIPAddressService.js';

export interface IIPAddressService {
  parse: (ip: string) => Buffer;
  stringify: (buf: Buffer) => string;
}

export const ipaddrJSIPAddressService = new IpaddrJSIPAddressService();
