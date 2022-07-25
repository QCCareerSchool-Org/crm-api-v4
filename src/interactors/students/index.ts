import { prisma } from '../../frameworks/prisma/index.js';
import { winstonLoggerService } from '../../services/logger/index.js';
import { paysafeServiceFactory } from '../../services/paysafe/index.js';
import { AddPaymentMethodInteractor } from './addPaymentMethodInteractor.js';
import { GetEnrollmentsInteractor } from './getEnrollmentsInteractor.js';
import { GetStudentInteractor } from './getStudentInteractor.js';

export const addPaymentMethodInteractor = new AddPaymentMethodInteractor(prisma, paysafeServiceFactory, winstonLoggerService);
export const getStudentInteractor = new GetStudentInteractor(prisma, winstonLoggerService);
export const getEnrollmentsInteractor = new GetEnrollmentsInteractor(prisma, winstonLoggerService);
