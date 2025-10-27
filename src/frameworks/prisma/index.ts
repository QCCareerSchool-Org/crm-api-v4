/**
 * We have two databases:
 *   1. the internal CRM database
 *   2. the Online Student Center remote database
 *
 * Each database has its own schema file. Each schema needs to be generated
 * separately with the following commands:
 *   1. npx prisma generate --schema prisma/schema.prisma
 *   2. npx prisma generate --schema prisma/remoteSchema.prisma
 *
 * `PrismaClient` and `RemotePrismaClient`, along with any associated Prisma
 * entities should be imported from this file, rather than from @prisma/client.
 */
import { Decimal } from 'decimal.js';
import { PrismaClient } from '../../../prisma/generated/client1';
import type { Country, Course, Currency, Enrollment, EnrollmentPaymentFrequency, EnrollmentPaymentPlan, EnrollmentStatus, Note, NoteType, PaymentMethod, PaymentType, PaysafeCompany, Province, RefreshToken, School, Student, StudentCenterAccountType, StudentSex, TelephoneCountryCode, Transaction, TransactionType, User, UserSex } from '../../../prisma/generated/client1/index.js';
import { PrismaClient as RemotePrismaClient } from '../../../prisma/generated/client2';
import type { Course as RemoteCourse, Enrollment as RemoteEnrollment } from '../../../prisma/generated/client2';

export { Decimal };
export type { PrismaClient, RemotePrismaClient };
export type { Country, Course, Currency, Enrollment, EnrollmentPaymentFrequency, EnrollmentPaymentPlan, EnrollmentStatus, Note, NoteType, PaymentMethod, PaymentType, PaysafeCompany, Province, RefreshToken, School, Student, StudentCenterAccountType, StudentSex, TelephoneCountryCode, Transaction, TransactionType, User, UserSex };
export type { RemoteCourse, RemoteEnrollment };

export const prisma = new PrismaClient();
export const remotePrisma = new RemotePrismaClient();
