import { Router } from 'express';

import type { Route } from './applyRoutes.js';
import { applyRoutes } from './applyRoutes.js';

export const router = Router();

const routes: Route[] = [
];

applyRoutes(router, routes);
