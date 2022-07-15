import { prisma } from '../../frameworks/prisma/index.js';
import { paysafeServiceFactory, winstonLoggerService } from '../../services/index.js';
import { AddPaymentMethodInteractor } from './addPaymentMethodInteractor.js';

export const addPaymentMethodInteractor = new AddPaymentMethodInteractor(prisma, paysafeServiceFactory, winstonLoggerService);
