import { Router } from 'express';

import { LoginController } from '../../controllers/authentication/loginController.js';
import { LogoutController } from '../../controllers/authentication/logoutController.js';
import { RefreshController } from '../../controllers/authentication/refreshController.js';
import type { Route } from './applyRoutes.js';
import { applyRoutes } from './applyRoutes.js';
import { browserDetectMiddleware } from './browserDetectMiddleware.js';
import { locationMiddleware } from './locationMiddleware.js';

export const authenticationRouter = Router();

const routes: Route[] = [
  // logging in
  [ 'post', '/login', LoginController, locationMiddleware, browserDetectMiddleware ],
  // logging out
  [ 'post', '/logout', LogoutController ],
  // refreshing an authorization token
  [ 'post', '/refresh', RefreshController ],
];

applyRoutes(authenticationRouter, routes);
