import { Router } from 'express';

import { AddPaymentMethodController } from '../../controllers/students/addPaymentMethodController.js';
import { ChargePaymentMethodController } from '../../controllers/students/chargePaymentMethodController.js';
import { GetEnrollmentController } from '../../controllers/students/getEnrollmentController.js';
import { GetStudentController } from '../../controllers/students/getStudentController.js';
import { StudentGuardMiddleware } from '../../controllers/students/studentGuardMiddleware.js';
import { UpdateBillingAddressController } from '../../controllers/students/updateBillingAddressController.js';
import { UpdateEmailAddressController } from '../../controllers/students/updateEmailAddressController.js';
import { UpdateTelephoneNumberController } from '../../controllers/students/updateTelephoneNumberController.js';
import type { Route } from './applyRoutes.js';
import { applyRoutes } from './applyRoutes.js';

export const studentRouter = Router();

const routes: Route[] = [
  [ 'use', '/:studentId', StudentGuardMiddleware ],
  [ 'get', '/:studentId', GetStudentController ],
  [ 'get', '/:studentId/enrollments/:enrollmentId', GetEnrollmentController ],
  [ 'post', '/:studentId/paymentMethods', AddPaymentMethodController ],
  [ 'post', '/:studentId/enrollments/:enrollmentId/paymentMethods/:paymentMethodId', ChargePaymentMethodController ],
  [ 'put', '/:studentId/telephoneNumber', UpdateTelephoneNumberController ],
  [ 'put', '/:studentId/emailAddress', UpdateEmailAddressController ],
  [ 'put', '/:studentId/billingAddress', UpdateBillingAddressController ],
];

applyRoutes(studentRouter, routes);
