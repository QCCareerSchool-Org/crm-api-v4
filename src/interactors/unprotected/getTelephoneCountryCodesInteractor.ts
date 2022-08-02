import type { PrismaClient } from '@prisma/client';

import type { TelephoneCountryCodeDTO } from '../../domain/telephoneCountryCodeDTO.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetTelephoneCountryCodesRequestDTO = void;

export type GetTelephoneCountryCodesResponseDTO = TelephoneCountryCodeDTO[];

export class GetTelephoneCountryCodesInteractor implements IInteractor<GetTelephoneCountryCodesRequestDTO, GetTelephoneCountryCodesResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute(): Promise<ResultType<GetTelephoneCountryCodesResponseDTO>> {
    try {
      const telephoneCountryCodes = await this.prisma.telephoneCountryCode.findMany();

      return Result.success(telephoneCountryCodes.map(t => ({
        telephoneCountryCodeId: t.telephoneCountryCodeId,
        code: t.code,
        region: t.region,
      })));

    } catch (err) {
      this.logger.error('error getting telephone country codes', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
