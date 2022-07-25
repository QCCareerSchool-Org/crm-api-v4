import { winston } from '../frameworks/winston/index.js';
import { privateKey, publicKey } from '../keys.js';
import { EnvironmentConfigService } from './config/environmentConfigService.js';
import { NodeCryptoService } from './crypto/nodeCryptoService.js';
import { DateService } from './date/dateService.js';
import { IpaddrJSIPAddressService } from './ipaddress/ipaddrIPAddressService.js';
import { JWTService } from './jwt/jwtService.js';
import { WinstonLoggerService } from './logger/winstonLoggerService.js';
import { PaysafeServiceFactory } from './paysafe/paysafeServiceFactory.js';
import { UUIDService } from './uuid/uuidService.js';

// service singletons
export const environmentConfigService = new EnvironmentConfigService();
export const winstonLoggerService = new WinstonLoggerService(winston);
export const jwtService = new JWTService(privateKey, publicKey);
export const uuidService = new UUIDService();
export const paysafeServiceFactory = new PaysafeServiceFactory(environmentConfigService, winstonLoggerService);
export const ipaddrJSIPAddressService = new IpaddrJSIPAddressService();
export const nodeCryptoService = new NodeCryptoService();
export const dateService = new DateService();
