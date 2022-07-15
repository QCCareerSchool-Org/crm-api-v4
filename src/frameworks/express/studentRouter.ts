import { Router } from 'express';

import { AddPaymentMethodController } from '../../controllers/students/addPaymentMethodController.js';
import { StudentGuardMiddleware } from '../../controllers/students/studentGuardMiddleware.js';
import type { Route } from './applyRoutes.js';
import { applyRoutes } from './applyRoutes.js';

export const studentRouter = Router();

const routes: Route[] = [
  [ 'use', '/:studentId', StudentGuardMiddleware ],
  [ 'post', '/:studentId/enrollments/:enrollmentId/paymentMethods', AddPaymentMethodController ],
];

applyRoutes(studentRouter, routes);
