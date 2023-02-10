import { prisma } from '../../frameworks/prisma/index.js';
import { environmentConfigService } from '../../services/config/index.js';
import { nodeCryptoService } from '../../services/crypto/index.js';
import { dateService } from '../../services/date/index.js';
import { ipaddrJSIPAddressService } from '../../services/ipaddress/index.js';
import { jwtService } from '../../services/jwt/index.js';
import { winstonLoggerService } from '../../services/logger/index.js';
import { uuidService } from '../../services/uuid/index.js';
import { CheckAuthenticationInteractor } from './checkAuthenticationInteractor.js';
import { LoginInteractor } from './loginInteractor.js';
import { LogoutInteractor } from './logoutInteractor.js';
import { RefreshInteractor } from './refreshInteractor.js';

export const checkAuthenticationInteractor = new CheckAuthenticationInteractor(jwtService, winstonLoggerService);
export const loginInteractor = new LoginInteractor(prisma, environmentConfigService, dateService, jwtService, nodeCryptoService, uuidService, ipaddrJSIPAddressService, winstonLoggerService);
export const logoutInteractor = new LogoutInteractor(prisma, winstonLoggerService);
export const refreshInteractor = new RefreshInteractor(prisma, environmentConfigService, dateService, jwtService, nodeCryptoService, winstonLoggerService);
