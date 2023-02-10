import { Router } from 'express';

import { GetCountriesController } from '../../controllers/unprotected/getCountriesController.js';
import { GetProvincesByCountryCodeController } from '../../controllers/unprotected/getProvincesByCountryCodeController.js';
import { GetTelephoneCountryCodesController } from '../../controllers/unprotected/getTelephoneCountryCodesController.js';
import type { Route } from './applyRoutes.js';
import { applyRoutes } from './applyRoutes.js';

export const router = Router();

const routes: Route[] = [
  [ 'get', '/telephoneCountryCodes', GetTelephoneCountryCodesController ],
  [ 'get', '/countries', GetCountriesController ],
  [ 'get', '/provinces', GetProvincesByCountryCodeController ],
];

applyRoutes(router, routes);
