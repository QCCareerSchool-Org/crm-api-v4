import { prisma } from '../../frameworks/prisma/index.js';
import { winstonLoggerService } from '../../services/logger/index.js';
import { GetCountriesInteractor } from './getCountriesInteractor.js';
import { GetProvincesByCountryCodeInteractor } from './getProvincesByCountryCodeInteractor.js';
import { GetTelephoneCountryCodesInteractor } from './getTelephoneCountryCodesInteractor.js';

export const getTelephoneCountryCodesInteractor = new GetTelephoneCountryCodesInteractor(prisma, winstonLoggerService);
export const getCountriesInteractor = new GetCountriesInteractor(prisma, winstonLoggerService);
export const getProvincesByCountryCodeInteractor = new GetProvincesByCountryCodeInteractor(prisma, winstonLoggerService);
