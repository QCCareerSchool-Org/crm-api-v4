import { prisma } from '../../frameworks/prisma/index.js';
import { emailValidatorService } from '../../services/emailValidator/index.js';
import { winstonLoggerService } from '../../services/logger/index.js';
import { paysafeServiceFactory } from '../../services/paysafe/index.js';
import { AddPaymentMethodInteractor } from './addPaymentMethodInteractor.js';
import { GetEnrollmentInteractor } from './getEnrollmentInteractor.js';
import { GetStudentInteractor } from './getStudentInteractor.js';
import { UpdateBillingAddressInteractor } from './updateBillingAddressInteractor.js';
import { UpdateEmailAddressInteractor } from './updateEmailAddressInteractor.js';
import { UpdateTelephoneNumberInteractor } from './updateTelephoneNumberInteractor.js';

export const addPaymentMethodInteractor = new AddPaymentMethodInteractor(prisma, paysafeServiceFactory, winstonLoggerService);
export const getStudentInteractor = new GetStudentInteractor(prisma, winstonLoggerService);
export const getEnrollmentInteractor = new GetEnrollmentInteractor(prisma, winstonLoggerService);
export const updateTelephoneNumberInteractor = new UpdateTelephoneNumberInteractor(prisma, winstonLoggerService);
export const updateEmailAddressInteractor = new UpdateEmailAddressInteractor(prisma, emailValidatorService, winstonLoggerService);
export const updateBillingAddressInteractor = new UpdateBillingAddressInteractor(prisma, winstonLoggerService);
