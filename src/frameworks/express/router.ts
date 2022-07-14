import { Router } from 'express';

import { AddPaymentMethodController } from '../../controllers/addPaymentMethodController';
import type { Route } from './applyRoutes';
import { applyRoutes } from './applyRoutes';

export const router = Router();

const routes: Route[] = [
  [ 'post', '/students/:studentId/enrollments/:enrollmentId/paymentMethods', AddPaymentMethodController ],
];

applyRoutes(router, routes);
