import { prisma } from '../../frameworks/prisma/index.js';
import { paysafeServiceFactory, winstonLoggerService } from '../../services/index.js';
import { AddPaymentMethodInteractor } from './addPaymentMethodInteractor.js';
import { GetEnrollmentsInteractor } from './getEnrollmentsInteractor.js';
import { GetStudentInteractor } from './getStudentInteractor.js';

export const addPaymentMethodInteractor = new AddPaymentMethodInteractor(prisma, paysafeServiceFactory, winstonLoggerService);
export const getStudentInteractor = new GetStudentInteractor(prisma, winstonLoggerService);
export const getEnrollmentsInteractor = new GetEnrollmentsInteractor(prisma, winstonLoggerService);
