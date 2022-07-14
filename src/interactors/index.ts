import type { Stream } from 'stream';
import { prisma } from '../frameworks/prisma/index.js';
import { jwtService, paysafeServiceFactory, winstonLoggerService } from '../services/index.js';
import { AddPaymentMethodInteractor } from './addPaymentMethodInteractor.js';
import { CheckAuthenticationInteractor } from './checkAuthenticationInteractor.js';

import type { ResultType } from './result.js';

export class InsufficientPrivileges extends Error { }

export interface IInteractor<RequestDTO, ResponseDTO> {
  execute: (arg: RequestDTO) => ResultType<ResponseDTO> | Promise<ResultType<ResponseDTO>>;
}

export type InteractorFileMemoryUpload = {
  data: Buffer;
  filename: string;
  mimeType: string;
  size: number;
};

export type InteractorFileDiskUpload = {
  path: string;
  filename: string;
  mimeType: string;
  size: number;
};

export type InteractorFileStreamUpload = {
  stream: Stream;
  filename: string;
  mimeType: string;
  size: number;
};

export type InteractorFileStreamDownload = {
  stream: Stream;
  filename: string;
  mimeType: string;
  size: number;
  lastModified: Date;
  maxAge: number;
  contentEncoding?: string;
  byteRange?: { start: number; end: number };
  download?: boolean;
};

export const addPaymentMethodInteractor = new AddPaymentMethodInteractor(prisma, paysafeServiceFactory, winstonLoggerService);
export const checkAuthenticationInteractor = new CheckAuthenticationInteractor(jwtService, winstonLoggerService);
