import type { CountryDTO } from '../../domain/countryDTO.js';
import type { ProvinceDTO } from '../../domain/provinceDTO.js';
import type { StudentDTO } from '../../domain/studentDTO.js';
import type { PrismaClient, Province } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type UpdateBillingAddressRequestDTO = {
  studentId: number;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string;
  postalCode: string;
  countryCode: string;
};

export type UpdateBillingAddressResponseDTO = StudentDTO & {
  province: ProvinceDTO | null;
  country: CountryDTO;
};

class UpdateBillingAddressError extends Error { }
export class UpdateBillingAddressStudentNotFound extends UpdateBillingAddressError { }
export class UpdateBillingAddressCountryNotFound extends UpdateBillingAddressError { }
export class UpdateBillingAddressProvinceNotFound extends UpdateBillingAddressError { }
export class UpdateBillingAddressProvinceCodeEmpty extends UpdateBillingAddressError { }
export class UpdateBillingAddressAddress1Empty extends UpdateBillingAddressError { }
export class UpdateBillingAddressAddress1TooLong extends UpdateBillingAddressError { }
export class UpdateBillingAddressAddress2TooLong extends UpdateBillingAddressError { }
export class UpdateBillingAddressCityEmpty extends UpdateBillingAddressError { }
export class UpdateBillingAddressCityTooLong extends UpdateBillingAddressError { }
export class UpdateBillingAddressPostalCodeEmpty extends UpdateBillingAddressError { }
export class UpdateBillingAddressPostalCodeTooLong extends UpdateBillingAddressError { }

export class UpdateBillingAddressInteractor implements IInteractor<UpdateBillingAddressRequestDTO, UpdateBillingAddressResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute(request: UpdateBillingAddressRequestDTO): Promise<ResultType<UpdateBillingAddressResponseDTO>> {
    try {
      const { studentId, address1, address2, city, provinceCode, postalCode, countryCode } = request;

      const student = await this.prisma.student.findFirst({
        where: { studentId },
      });
      if (!student) {
        return Result.fail(new UpdateBillingAddressStudentNotFound());
      }

      const country = await this.prisma.country.findFirst({ where: { code: countryCode } });
      if (!country) {
        return Result.fail(new UpdateBillingAddressCountryNotFound());
      }

      if (this.needsProvince(countryCode) && provinceCode.length === 0) {
        return Result.fail(new UpdateBillingAddressProvinceCodeEmpty());
      }

      let province: Province | null = null;
      if (provinceCode.length > 0) {
        province = await this.prisma.province.findFirst({ where: { code: provinceCode, country: { code: countryCode } } });
        if (!province) {
          return Result.fail(new UpdateBillingAddressProvinceNotFound());
        }
      }

      if (address1.length === 0) {
        return Result.fail(new UpdateBillingAddressAddress1Empty());
      }
      if ([ ...address1 ].length > 40) {
        return Result.fail(new UpdateBillingAddressAddress1TooLong());
      }

      if ([ ...address2 ].length > 40) {
        return Result.fail(new UpdateBillingAddressAddress2TooLong());
      }

      if (city.length === 0) {
        return Result.fail(new UpdateBillingAddressCityEmpty());
      }
      if ([ ...city ].length > 31) {
        return Result.fail(new UpdateBillingAddressCityTooLong());
      }

      if (country.needsPostalCode && postalCode.length === 0) {
        return Result.fail(new UpdateBillingAddressPostalCodeEmpty());
      }
      if ([ ...postalCode ].length > 10) {
        return Result.fail(new UpdateBillingAddressPostalCodeTooLong());
      }

      const oldAddress = {
        address1: student.address1,
        address2: student.address2,
        city: student.city,
        provinceId: student.provinceId,
        postalCode: student.postalCode,
        countryId: student.countryId,
      };

      const newAddress = {
        address1,
        address2,
        city,
        provinceId: province?.provinceId ?? null,
        postalCode,
        countryId: country.countryId,
      };

      const updated = await this.prisma.student.update({
        where: { studentId },
        data: {
          address1,
          address2,
          city,
          provinceId: province?.provinceId ?? null,
          postalCode,
          countryId: country.countryId,
          notes: {
            create: { note: `Student updated address from ${JSON.stringify(oldAddress)} to ${JSON.stringify(newAddress)}` },
          },
        },
        include: {
          country: true,
          province: true,
          enrollments: {
            include: { course: true, currency: true, transactions: true },
          },
        },
      });

      return Result.success({
        studentId: updated.studentId,
        currencyId: updated.currencyId,
        userId: updated.userId,
        languageId: updated.languageId,
        sex: updated.sex,
        firstName: updated.firstName,
        lastName: updated.lastName,
        address1: updated.address1,
        address2: updated.address2,
        city: updated.city,
        provinceId: updated.provinceId,
        postalCode: updated.postalCode,
        countryId: updated.countryId,
        telephoneCountryCode: updated.telephoneCountryCode,
        telephoneNumber: updated.telephoneNumber,
        emailAddress: updated.emailAddress,
        paymentStart: updated.paymentStart,
        paymentDay: updated.paymentDay,
        sms: updated.sms,
        enrollmentCount: updated.enrollmentCount,
        created: updated.created,
        modified: updated.modified,
        province: updated.province === null ? null : {
          provinceId: updated.province.provinceId,
          countryId: updated.province.countryId,
          code: updated.province.code,
          name: updated.province.name,
        },
        country: {
          countryId: updated.country.countryId,
          code: updated.country.code,
          name: updated.country.name,
          needsPostalCode: updated.country.needsPostalCode,
        },
      });

    } catch (err) {
      this.logger.error('error updating address', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }

  private needsProvince(countryCode: string): boolean {
    return [ 'CA', 'US', 'AU' ].includes(countryCode);
  }
}
